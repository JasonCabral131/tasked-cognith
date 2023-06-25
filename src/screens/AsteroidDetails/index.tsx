import {
  Box,
  HStack,
  View,
  Text,
  Divider,
  ScrollView,
  Button,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../fixture/colors';
import {Dimensions, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {hitSlop} from '../../common';
import {AsteriodProps} from '../../fixture/types/Asteriods';
import constant from '../../fixture/constant';
import Loader from '../../component/Loader';
import AsteroidContent from './AsteroidContent';
import OrbitalData from './OrbitalData';
import EstimatedDiameter from './EstimatedDiameter';
import {useNavigation, useRoute} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const AsteroidDetails = () => {
  const {id}: any = useRoute().params || {};
  const navigation = useNavigation();
  const [data, setData] = useState<AsteriodProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const initialUrl = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${constant.API_KEY}`;

  const fetchData = async (url: RequestInfo) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setIsLoading(false);
      if (response.status === 200) {
        setData(jsonData);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  if (isLoading) {
    return <Loader />;
  }
  return data?.id ? (
    <View
      flex={1}
      bgColor={Colors.white}
      height={height}
      width={width}
      justifyContent={'center'}>
      <Box flex={1} safeArea>
        <HStack alignItems={'center'} px={4}>
          <TouchableOpacity
            testID="back-button"
            hitSlop={hitSlop}
            onPress={onBack}>
            <AntDesign name="arrowleft" size={24} />
          </TouchableOpacity>
          <Text fontSize={'md'} fontWeight={'bold'} ml={2}>
            {data?.name}
          </Text>
        </HStack>
        <LottieView
          source={require('./../../assets/lottie/space-x.json')}
          style={{height: 220, width: 220, alignSelf: 'center'}}
          loop
          autoPlay
        />

        <Box flex={1}>
          <Divider width={width} />
          <ScrollView flex={1} px={4}>
            <AsteroidContent label={'Asteroid ID'} subLabel={data?.id} />
            <AsteroidContent
              label={'Name Limited'}
              subLabel={data?.name_limited}
            />
            <AsteroidContent
              label={'Designation'}
              subLabel={data?.designation}
            />
            <AsteroidContent
              label={'Sentry Object'}
              subLabel={data?.is_sentry_object ? 'Yes' : 'No'}
            />
            <AsteroidContent
              label={'Potentially Hazardous Asteroid'}
              subLabel={data?.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
            />
            <AsteroidContent
              label={'Absolute Magnitude'}
              subLabel={data?.absolute_magnitude_h}
            />
            <AsteroidContent
              label={'NASA JPL URL'}
              subLabel={data?.nasa_jpl_url}
              isUrl
            />

            <OrbitalData orbital_data={data?.orbital_data} />
            <EstimatedDiameter estimated_diameter={data?.estimated_diameter} />
          </ScrollView>
        </Box>
      </Box>
    </View>
  ) : (
    <Box flex={1} bgColor={Colors.white} pb={2} testID="error-view">
      <Box flex={1} justifyContent={'center'}>
        <LottieView
          source={require('./../../assets/lottie/no-data-animation.json')}
          style={{height: 220, width: 220, alignSelf: 'center'}}
          loop
          autoPlay
        />
      </Box>
      <Box paddingX="5">
        <Button
          width="100%"
          marginY={5}
          borderRadius="full"
          backgroundColor={Colors.primary}
          onPress={onBack}>
          <Text fontSize="md" color="white" alignSelf="center">
            Back
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default AsteroidDetails;
