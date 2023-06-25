import React, {Component} from 'react';
import {estimatedDiameterValueProps} from '../../fixture/types/Asteriods';
import {Box, Divider, HStack, Text, VStack} from 'native-base';
import AsteroidContent from './AsteroidContent';
type Props = {
  estimated_diameter: estimatedDiameterValueProps | null | undefined;
};
export class EstimatedDiameter extends Component<Props> {
  render() {
    return (
      <VStack px={4} space={3} divider={<Divider />}>
        <Text fontSize={'sm'} fontWeight={'700'} mt={3}>
          Estimated Diameter
        </Text>
        <Box>
          <Text fontSize={'sm'} fontWeight={'700'} mt={3}>
            kilometers
          </Text>
          <HStack justifyContent={'space-between'}>
            <VStack>
              <AsteroidContent
                label={'Diameter mix'}
                subLabel={
                  this.props.estimated_diameter?.kilometers
                    .estimated_diameter_min as String
                }
                px={'0'}
              />
            </VStack>
            <VStack>
              <AsteroidContent
                label={'Diameter max'}
                subLabel={
                  this.props.estimated_diameter?.kilometers
                    .estimated_diameter_max as String
                }
                px={'0'}
              />
            </VStack>
          </HStack>
        </Box>
        <Box>
          <Text fontSize={'sm'} fontWeight={'700'} mt={3}>
            Meters
          </Text>
          <HStack justifyContent={'space-between'}>
            <VStack>
              <AsteroidContent
                label={'Diameter mix'}
                subLabel={
                  this.props.estimated_diameter?.meters
                    .estimated_diameter_min as String
                }
                px={'0'}
              />
            </VStack>
            <VStack>
              <AsteroidContent
                label={'Diameter max'}
                subLabel={
                  this.props.estimated_diameter?.meters
                    .estimated_diameter_max as String
                }
                px={'0'}
              />
            </VStack>
          </HStack>
        </Box>
        <Box>
          <Text fontSize={'sm'} fontWeight={'700'} mt={3}>
            Miles
          </Text>
          <HStack justifyContent={'space-between'}>
            <VStack>
              <AsteroidContent
                label={'Diameter mix'}
                subLabel={
                  this.props.estimated_diameter?.miles
                    .estimated_diameter_min as String
                }
                px={'0'}
              />
            </VStack>
            <VStack>
              <AsteroidContent
                label={'Diameter max'}
                subLabel={
                  this.props.estimated_diameter?.miles
                    .estimated_diameter_max as String
                }
                px={'0'}
              />
            </VStack>
          </HStack>
        </Box>
        <Box>
          <Text fontSize={'sm'} fontWeight={'700'} mt={3}>
            Feet
          </Text>
          <HStack justifyContent={'space-between'}>
            <VStack>
              <AsteroidContent
                label={'Diameter mix'}
                subLabel={
                  this.props.estimated_diameter?.feet
                    .estimated_diameter_min as String
                }
                px={'0'}
              />
            </VStack>
            <VStack>
              <AsteroidContent
                label={'Diameter max'}
                subLabel={
                  this.props.estimated_diameter?.feet
                    .estimated_diameter_max as String
                }
                px={'0'}
              />
            </VStack>
          </HStack>
        </Box>
      </VStack>
    );
  }
}

export default EstimatedDiameter;