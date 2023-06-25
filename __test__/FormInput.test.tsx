import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react-native';
import FormInput from '../src/screens/FormInput';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('FormInput', () => {
  it('renders the component', () => {
    const {getByPlaceholderText} = render(<FormInput />);

    const inputElement = getByPlaceholderText('Enter asteroid ID');

    expect(inputElement).toBeTruthy();
  });
  it('displays error message when submitting without entering asteroid ID', async () => {
    const {getByPlaceholderText, getByTestId, getByText} = render(
      <FormInput />,
    );

    const inputElement = getByPlaceholderText('Enter asteroid ID');
    const buttonElement = getByTestId('submit-button');

    fireEvent.press(buttonElement);

    await waitFor(() => {
      expect(getByText('Asteroid ID Required')).toBeTruthy();
    });

    expect(inputElement).toBeTruthy();
  });
  it('navigates to AsteroidDetails screen on successful form submission', async () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockNavigate });

    const { getByTestId, getByPlaceholderText } = render(<FormInput />);
    const buttonElement = getByTestId('submit-button');
    const inputElement = getByPlaceholderText('Enter asteroid ID');

    fireEvent.changeText(inputElement, '2000433');
    fireEvent.press(buttonElement);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('AsteroidDetails', {
        id: '2000433',
      });
    });
  });
  it('displays the "Random Asteroid" button', () => {
    const {getByTestId} = render(<FormInput />);
  
    const buttonElement = getByTestId('random-asteroid');
  
    expect(buttonElement).toBeTruthy();
  });
  it('navigates to AsteroidDetails screen with a random asteroid ID', async () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({navigate: mockNavigate});
  
    const {getByTestId} = render(<FormInput />);
    const buttonElement = getByTestId('random-asteroid');
  
    fireEvent.press(buttonElement);
  
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('AsteroidDetails', {
        id: expect.any(String),
      });
    });
  });
});
