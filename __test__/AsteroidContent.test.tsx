import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import {waitFor} from '@testing-library/react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Alert, Linking} from 'react-native';

import AsteroidContent from '../src/screens/AsteroidDetails/AsteroidContent';
const props = {
  label: 'my label',
  subLabel: 'my sublabel',
};

jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
}));

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

jest.mock('react-native/Libraries/Linking/Linking', () => {
  const openURL = jest.fn();
  const canOpenURL = jest.fn((url: string) => Promise.resolve(true));

  return {
    openURL,
    canOpenURL,
  };
});

describe('AsteroidContent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('is Props rendered', async () => {
    const {queryByText} = render(
      <NativeBaseProvider>
        <AsteroidContent {...props} />
      </NativeBaseProvider>,
    );
    await waitFor(() => {
      const labelTobeDefined = queryByText(props.label);
      const subLabelTobeDefined = queryByText(props.subLabel);
      expect(labelTobeDefined).toBeDefined();
      expect(subLabelTobeDefined).toBeDefined();
    });
  });
  test('renders label and subLabel correctly', () => {
    const label = 'Test Label';
    const subLabel = 'Test Sublabel';
    const {getByText} = render(
      <AsteroidContent label={label} subLabel={subLabel} />,
    );

    expect(getByText(label)).toBeTruthy();
    expect(getByText(subLabel)).toBeTruthy();
  });
  test('renders subLabel as clickable URL', async () => {
    const label = 'Test Label';
    const subLabel = 'https://example.com';

    const { getByText } = render(
      <AsteroidContent label={label} subLabel={subLabel} isUrl={true} />,
    );

    fireEvent.press(getByText(subLabel));
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async code to resolve

    expect(Linking.canOpenURL).toHaveBeenCalledWith(subLabel);
    expect(Linking.openURL).toHaveBeenCalledWith(subLabel);
    expect(Alert.alert).not.toHaveBeenCalled();
  });
  test('renders subLabel as non-clickable text', () => {
    const label = 'Test Label';
    const subLabel = 'Test Sublabel';

    const { getByText } = render(
      <AsteroidContent label={label} subLabel={subLabel} />,
    );

    fireEvent.press(getByText(subLabel));
    expect(Clipboard.setString).toHaveBeenCalledWith(subLabel);
    expect(Alert.alert).toHaveBeenCalledWith('copy to clipboard');
    expect(Linking.canOpenURL).not.toHaveBeenCalled();
    expect(Linking.openURL).not.toHaveBeenCalled();
  });
  test('clicking subLabel with URL triggers openURL', async () => {
    const label = 'Test Label';
    const subLabel = 'https://example.com';

    const { getByText } = render(
      <AsteroidContent label={label} subLabel={subLabel} isUrl={true} />,
    );

    fireEvent.press(getByText(subLabel));
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async code to resolve

    expect(Linking.canOpenURL).toHaveBeenCalledWith(subLabel);
    expect(Linking.openURL).toHaveBeenCalledWith(subLabel);
    expect(Alert.alert).not.toHaveBeenCalled();
  });
  test('clicking subLabel triggers copy to clipboard', () => {
    const label = 'Test Label';
    const subLabel = 'Some text';

    const { getByText } = render(
      <AsteroidContent label={label} subLabel={subLabel} />,
    );

    fireEvent.press(getByText(subLabel));

    expect(Clipboard.setString).toHaveBeenCalledWith(subLabel);
    expect(Alert.alert).toHaveBeenCalledWith('copy to clipboard');
  });
  test('renders subLabel as clickable URL and fails to open URL', async () => {
    const label = 'Test Label';
    const subLabel = 'https://example.com';

    Linking.canOpenURL.mockResolvedValueOnce(false);

    const { getByText } = render(
      <AsteroidContent label={label} subLabel={subLabel} isUrl={true} />,
    );

    fireEvent.press(getByText(subLabel));
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async code to resolve

    expect(Linking.canOpenURL).toHaveBeenCalledWith(subLabel);
    expect(Linking.openURL).not.toHaveBeenCalled();
    expect(Alert.alert).toHaveBeenCalledWith('Failed to open url');
  });
});
