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
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ProfileActivity from './src/pages/ProfileActivity';
import EditLocation from './src/pages/EditLocation';

const Nav = StackNavigator({
  // Home: { screen: WeatherApp },
  Home: { screen: GPSWeatherApp },
  Menu: { screen: MainMenu },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ProfileActivity: { screen: ProfileActivity }, 
  EditLocation: { screen: EditLocation },
}, { headerMode: 'none' });

const App = () => (
  // <WeatherApp />
  <GPSWeatherApp />
);

AppRegistry.registerComponent('weather', () => Nav, App);
