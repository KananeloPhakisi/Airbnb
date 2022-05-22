import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../Screens/SearchResults';
import SearchResultsMaps from "../Screens/SearchResultsMap";


const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#f15454',
      tabBarIndicatorStyle: {
        backgroundColor: '#f15454',
      }
    }}>
      <Tab.Screen name={"list"} component={SearchResults} />
      <Tab.Screen name={"map"} component={SearchResultsMaps} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
