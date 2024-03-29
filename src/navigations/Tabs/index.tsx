import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FormInput from '../../screens/FormInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../fixture/colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Search"
        component={FormInput}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: props => (
            <FontAwesome
              name={'satellite-dish'}
              size={22}
              testID="search-tab-icon"
              color={props.focused ? Colors.primary : Colors.secondaryColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(Tabs);
