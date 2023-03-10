/* eslint-disable react-hooks/rules-of-hooks */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from 'screens';
import linking from 'utils/linking';
import {navigationRef} from './utilities';

export type NavigatorParamList = {
  home: undefined;
};
const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{presentation: 'modal'}}></Stack.Group> */}
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} {...props} linking={linking}>
      <AppStack />
      {/* <LogoLoading ref={ref => LoadingApp.register(ref)} /> */}
    </NavigationContainer>
  );
};
