import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import AsteroidDetails from '../src/screens/AsteroidDetails';
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({children}: {children: React.ReactNode}) => (
    <>{children}</>
  ),
  useSafeAreaInsets: () => ({top: 0, right: 0, bottom: 0, left: 0}),
}));
jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      id: '123',
    },
  }),
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));
declare const global: NodeJS.Global;
describe('Asteroid Details', () => {
  const mockedParams = {
    id: '2000433',
  };
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: '2000433',
            name: '433 Eros (A898 PA)',
            // Add other necessary properties
          }),
        status: 200,
      }),
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('renders loading indicator initially', async () => {
    const {queryByTestId} = render(
      <NativeBaseProvider>
        <AsteroidDetails />
      </NativeBaseProvider>,
    );

    expect(queryByTestId('lottie-view')).toBeTruthy();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });
  test('renders asteroid details after data is fetched', async () => {
    const {queryByText, queryByTestId} = render(
      <NativeBaseProvider>
        <AsteroidDetails />
      </NativeBaseProvider>,
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(queryByTestId('loader')).toBeFalsy());

    expect(queryByText('433 Eros (A898 PA)')).toBeTruthy();
    // Add assertions for other rendered elements and data
  });
  test('navigates back when back button is pressed', async () => {
    const mockGoBack = jest.fn();
    const mockUseNavigation = jest.spyOn(
      require('@react-navigation/native'),
      'useNavigation',
    );
    mockUseNavigation.mockReturnValue({goBack: mockGoBack});

    const {queryByTestId} = render(
      <NativeBaseProvider>
        <AsteroidDetails />
      </NativeBaseProvider>,
    );

    await waitFor(() => expect(queryByTestId('lottie-view')).toBeFalsy());

    fireEvent.press(queryByTestId('back-button'));

    expect(mockGoBack).toHaveBeenCalled();
    mockUseNavigation.mockRestore();
  });
  test('renders error view when API call fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        status: 500,
      })
    );
  
    const { queryByTestId } = render(
      <NativeBaseProvider>
        <AsteroidDetails />
      </NativeBaseProvider>
    );
    await waitFor(() => expect(queryByTestId('error-view')).toBeTruthy());
  });   
});
