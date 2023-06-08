import React from 'react';
export const navigationRef = createNavigationContainerRef();
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import StackNavigation from './src/navigations/Stacks';
const App = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async () => {
        // to do is that changes create firebase analytics when new screen shows
      }}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
