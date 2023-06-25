import React, {Component} from 'react';
import {typeOrbitalProps} from '../../fixture/types/Asteriods';
import {Divider, HStack, Text, VStack} from 'native-base';
import AsteroidContent from './AsteroidContent';
type Props = {
  orbital_data: typeOrbitalProps | null | undefined;
};
export class OrbitalData extends Component<Props> {
  render() {
    return (
      <VStack px={4} space={3} divider={<Divider />}>
        <Text fontSize={'sm'} fontWeight={'700'} mt={3}>
          Orbital Data
        </Text>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Orbit ID'}
              subLabel={this.props.orbital_data?.orbit_id}
              px={'0'}
            />
          </VStack>
          <VStack justifyContent="space-between">
            <AsteroidContent
              label={'Orbit Uncertainty'}
              subLabel={this.props.orbital_data?.orbit_uncertainty as String}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Data Arc in Days'}
              subLabel={this.props.orbital_data?.data_arc_in_days}
              px={'0'}
            />
          </VStack>
          <VStack justifyContent="space-between">
            <AsteroidContent
              label={'Observation Used'}
              subLabel={
                this.props.orbital_data?.observations_used as unknown as String
              }
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Data Arc in Days'}
              subLabel={this.props.orbital_data?.data_arc_in_days}
              px={'0'}
            />
          </VStack>
          <VStack justifyContent="space-between">
            <AsteroidContent
              label={'Observation Used'}
              subLabel={
                this.props.orbital_data?.observations_used as unknown as String
              }
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'First Observation Date'}
              subLabel={this.props.orbital_data?.first_observation_date}
              px={'0'}
            />
          </VStack>
          <VStack justifyContent="space-between">
            <AsteroidContent
              label={'Last Observation Date'}
              subLabel={this.props.orbital_data?.last_observation_date}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Minimum orbit intersection'}
              subLabel={this.props.orbital_data?.minimum_orbit_intersection}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Jupiter tisserand invariant'}
              subLabel={this.props.orbital_data?.jupiter_tisserand_invariant}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Epoch osculation'}
              subLabel={this.props.orbital_data?.epoch_osculation}
              px={'0'}
            />
          </VStack>
          <VStack justifyContent="space-between">
            <AsteroidContent
              label={'eccentricity'}
              subLabel={this.props.orbital_data?.eccentricity}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Semi major axis'}
              subLabel={this.props.orbital_data?.semi_major_axis}
              px={'0'}
            />
          </VStack>
          <VStack justifyContent="space-between">
            <AsteroidContent
              label={'Inclination'}
              subLabel={this.props.orbital_data?.inclination}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'orbital period'}
              subLabel={this.props.orbital_data?.orbital_period}
              px={'0'}
            />
          </VStack>
          <VStack>
            <AsteroidContent
              label={'Perihelion distance'}
              subLabel={this.props.orbital_data?.perihelion_distance}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Perihelion argument'}
              subLabel={this.props.orbital_data?.perihelion_argument}
              px={'0'}
            />
          </VStack>
          <VStack>
            <AsteroidContent
              label={'Aphelion distance'}
              subLabel={this.props.orbital_data?.aphelion_distance}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Aphelion distance'}
              subLabel={this.props.orbital_data?.aphelion_distance}
              px={'0'}
            />
          </VStack>
          <VStack>
            <AsteroidContent
              label={'Perihelion_time'}
              subLabel={this.props.orbital_data?.perihelion_time}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Mean anomaly'}
              subLabel={this.props.orbital_data?.mean_anomaly}
              px={'0'}
            />
          </VStack>
          <VStack>
            <AsteroidContent
              label={'Mean motion'}
              subLabel={this.props.orbital_data?.mean_motion}
              px={'0'}
            />
          </VStack>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <AsteroidContent
              label={'Equinox'}
              subLabel={this.props.orbital_data?.equinox}
              px={'0'}
            />
          </VStack>
          <VStack>
            <AsteroidContent
              label={'Orbit determination date'}
              subLabel={this.props.orbital_data?.orbit_determination_date}
              px={'0'}
            />
          </VStack>
        </HStack>
        <Text fontSize={'sm'} fontWeight={'700'} mt={3}>
          Orbit Class
        </Text>
        <HStack justifyContent={'space-between'} flexDirection={'column'}>
          <VStack>
            <AsteroidContent
              label={'Orbit class type'}
              subLabel={this.props.orbital_data?.orbit_class?.orbit_class_type}
              px={'0'}
            />
          </VStack>
          <VStack>
            <AsteroidContent
              label={'Orbit class description'}
              subLabel={
                this.props.orbital_data?.orbit_class?.orbit_class_description
              }
              px={'0'}
            />
          </VStack>
          <VStack>
            <AsteroidContent
              label={'Orbit class range'}
              subLabel={this.props.orbital_data?.orbit_class?.orbit_class_range}
              px={'0'}
            />
          </VStack>
        </HStack>
      </VStack>
    );
  }
}

export default OrbitalData;