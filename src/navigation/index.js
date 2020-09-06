import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import { navigationRef } from './RootNavigation';

const { Navigator, Screen } = createStackNavigator();

const Placeholder = () => <Text>PlaceHolderComponent</Text>;

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 75,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const InitialNavigator = () => (
  <Navigator
    initialRouteName="onboardone"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      transitionSpec: {
        open: config,
        close: config,
      },
    }}
  >
    <Screen name="onboardone" component={Placeholder} />
  </Navigator>
);

const UnsignedNavigator = () => (
  <Navigator
    initialRouteName="signin"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Screen name="signin" component={Placeholder} />
  </Navigator>
);

const SignedNavigator = () => (
  <Navigator initialRouteName="tabs" screenOptions={{ headerShown: false }}>
    {/* <Screen name="tabs" component={Tabs} /> */}
  </Navigator>
);

const ApplicationNavigator = ({ logged, loaded }) => {
  let initialRoute = logged ? 'signed' : 'notsigned';
  if (!loaded) {
    initialRoute = 'initial';
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      >
        <Screen name="initial" component={InitialNavigator} />
        <Screen name="notsigned" component={UnsignedNavigator} />
        <Screen name="signed" component={SignedNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};
ApplicationNavigator.propTypes = {
  logged: PropTypes.bool,
  loaded: PropTypes.bool,
};
export default ApplicationNavigator;
