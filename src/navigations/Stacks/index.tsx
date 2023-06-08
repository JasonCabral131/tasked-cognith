import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsteroidDetails from '../../screens/AsteroidDetails';
import {RootStackParamList} from '../../fixture/types/RootStackParamList';
import Tabs from '../Tabs';
const Stack = createNativeStackNavigator<RootStackParamList>();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="AsteroidList" component={Tabs} />
      <Stack.Screen name="AsteroidDetails" component={AsteroidDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
