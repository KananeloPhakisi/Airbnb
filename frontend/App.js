/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'; 
import HomeScreen from './src/Screens/Home';
import Router from './src/Navigation/Router';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Router />
    </>
  );
};

export default App;
