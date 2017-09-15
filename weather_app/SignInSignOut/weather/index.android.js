/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeatherApp from './src/WeatherApp';
import MainMenu from './src/pages/MainMenu';
import GPSWeatherApp from './src/GPSWeatherApp';
import EditLocation from './src/pages/EditLocation';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ProfileActivity from './src/pages/ProfileActivity';
import UserWeatherApp from './src/UserWeatherApp';

const Nav = StackNavigator({
  Home: { screen: GPSWeatherApp },
  WeatherLocation: { screen: WeatherApp },
  EditLocation: { screen: EditLocation },
  SignIn: { screen: SignIn },
  Menu: { screen: MainMenu },
  SignUp: { screen: SignUp },
  UserWeatherApp: { screen: UserWeatherApp },
  // ProfileActivity: { screen: ProfileActivity }, 
}, { headerMode: 'none' });

const App = () => (
  // <WeatherApp />
  <GPSWeatherApp />
);

AppRegistry.registerComponent('weather', () => Nav, App);
