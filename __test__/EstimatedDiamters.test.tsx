import React from 'react';
import {render} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import {screen} from '@testing-library/react-native';
import EstimatedDiameter from '../src/screens/AsteroidDetails/EstimatedDiameter';
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({children}) => <>{children}</>,
  useSafeAreaInsets: () => ({top: 0, right: 0, bottom: 0, left: 0}),
}));
describe('EstimatedDiameter', () => {
  const estimatedDiameter = {
    kilometers: {
      estimated_diameter_min: '100',
      estimated_diameter_max: '200',
    },
    meters: {
      estimated_diameter_min: '1000',
      estimated_diameter_max: '2000',
    },
    miles: {
      estimated_diameter_min: '62',
      estimated_diameter_max: '124',
    },
    feet: {
      estimated_diameter_min: '328',
      estimated_diameter_max: '656',
    },
  };
  test('renders all estimated diameter values', () => {
    render(
      <NativeBaseProvider>
        <EstimatedDiameter estimated_diameter={estimatedDiameter} />
      </NativeBaseProvider>
    );

    expect(screen.queryAllByText('Diameter mix')[0]).toBeDefined();
    expect(screen.queryAllByText('Diameter mix')[1]).toBeDefined();
    expect(screen.queryAllByText('Diameter max')[0]).toBeDefined();
    expect(screen.queryAllByText('Diameter max')[1]).toBeDefined();
    expect(screen.getByText('Meters')).toBeDefined();
    expect(screen.getByText('Miles')).toBeDefined();
    expect(screen.getByText('Feet')).toBeDefined();
  });
});
