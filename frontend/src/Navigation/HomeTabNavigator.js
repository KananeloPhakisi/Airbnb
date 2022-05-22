import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import ExploreNavigator from './ExploreNavigator';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchResultsMaps from '../Screens/SearchResultsMap';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" size={25} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name={'profile'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
