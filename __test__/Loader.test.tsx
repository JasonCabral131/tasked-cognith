import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Loader from '../src/component/Loader';
import {waitFor, render} from '@testing-library/react-native';
const LoaderComponent = () => {
  return (
    <NativeBaseProvider>
      <Loader />
    </NativeBaseProvider>
  );
};
describe('loader test', () => {
  test('Loader render completely', () => {
    render(<LoaderComponent />);
  });
  it('renders "Loading..." text', async () => {
    const {queryByText, queryByTestId} = render(<LoaderComponent />);
    await waitFor(() => {
      const loadingText = queryByText('Loading...');
      const loadingID = queryByTestId('loading');
      expect(loadingText).toBeDefined();
      expect(loadingID).toBeDefined();
    });
  });
  test('renders loading text', () => {
    const {getByTestId} = render(<Loader />);
    const loadingText = getByTestId('loading');
    expect(loadingText.props.children).toBe('Loading...');
  });

  test('renders LottieView component', () => {
    const {getByTestId} = render(<Loader />);
    const lottieView = getByTestId('lottie-view');
    expect(lottieView).toBeTruthy();
  });
  it('matches snapshot', () => {
    const {toJSON} = render(<Loader />);
    expect(toJSON()).toMatchSnapshot();
  })
});
