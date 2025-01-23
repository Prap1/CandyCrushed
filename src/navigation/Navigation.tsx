import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../utils/NavigationUtil';
import HomeScreen from '../screens/HomeScreen';
import LevelScreen from '../screens/LevelScreen';
import SplashScreen from '../screens/SplashScreen';
import GameScreen from '../screens/GameScreen';
import { SoundProvider } from './SoundContext';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SoundProvider>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="HomeScreen"
          options={{
            animation: 'fade',
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="LevelScreen"
          options={{
            animation: 'fade',
          }}
          component={LevelScreen}
        />
        <Stack.Screen
          name="Gamescreen"
          options={{
            animation: 'fade',
          }}
          component={GameScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SoundProvider>
  );
};

export default Navigation;
