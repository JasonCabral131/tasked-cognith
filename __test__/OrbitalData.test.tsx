import React from 'react';
import {render} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import {screen} from '@testing-library/react-native';
import OrbitalData from '../src/screens/AsteroidDetails/OrbitalData';

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({children}) => <>{children}</>,
  useSafeAreaInsets: () => ({top: 0, right: 0, bottom: 0, left: 0}),
}));

describe('OrbitalData', () => {
  const orbitalData = {
    orbit_id: '123',
    orbit_uncertainty: 'high',
    data_arc_in_days: '30',
    observations_used: '50',
    first_observation_date: '2022-01-01',
    last_observation_date: '2022-01-31',
    minimum_orbit_intersection: '0.1',
    ascending_node_longitude: '0.1',
    jupiter_tisserand_invariant: '1.5',
    epoch_osculation: '2022-01-15',
    eccentricity: '0.2',
    semi_major_axis: '2.0',
    inclination: '45',
    orbital_period: '365',
    perihelion_distance: '1.0',
    perihelion_argument: '90',
    aphelion_distance: '3.0',
    perihelion_time: '2022-01-01',
    mean_anomaly: '0',
    mean_motion: '0.5',
    equinox: 'J2000',
    orbit_determination_date: '2022-01-01',
    orbit_class: {
      orbit_class_type: 'Apollo',
      orbit_class_description: 'Near-Earth Asteroid',
      orbit_class_range: '0.9 AU < q (perihelion) < 1.3 AU',
    },
  };
  test('renders orbital data correctly', () => {
    render(
      <NativeBaseProvider>
        <OrbitalData orbital_data={orbitalData} />
      </NativeBaseProvider>,
    );

    expect(screen.getByText('Orbital Data')).toBeDefined();
    expect(screen.getByText('Orbit ID')).toBeDefined();
    expect(screen.getByText('123')).toBeDefined();
    // Add more assertions for other elements in the component
  });
});
