import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CreateExitTicketScreen from "../screens/CreateExitTicketScreen";
import ExitTicketDetailsScreen from "../screens/ExitTicketDetailsScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateExitTicket" component={CreateExitTicketScreen} />
      <Stack.Screen name="ExitTicketDetails" component={ExitTicketDetailsScreen} />
    </Stack.Navigator>
  );
}
