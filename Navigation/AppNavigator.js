import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import EventScreen from "../screen/Event";
import EventsScreen from "../screen/Events";
import MapScreen from "../screen/Map";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function EventsStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="EventsScreen" component={EventsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="EventScreen" component={EventScreen} />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MapScreen" component={MapScreen}  />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Events" component={EventsStack} />
        <Tab.Screen name="Map" component={MapStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
