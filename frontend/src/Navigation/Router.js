import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../Screens/DestinationSearch";
import HomeScreen from "../Screens/Home";
import HomeTabNavigator from "./HomeTabNavigator";
import GuestsScreen from '../Screens/Guests';
import PostScreen from "../Screens/PostScreen";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name={"Welcome"}
        component={HomeTabNavigator}
        options={{
            headerShown: false
        }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination"
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many people?"
          }}
        />

        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Accommodation"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
