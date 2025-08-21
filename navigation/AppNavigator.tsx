import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CreateTicketScreen from "../screens/CreateTicketScreen";
import GeneratedQuestionsScreen from "../screens/GeneratedQuestionsScreen";

export type RootStackParamList = {
  CreateTicket: undefined;
  GeneratedQuestions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateTicket" component={CreateTicketScreen} />
        <Stack.Screen
          name="GeneratedQuestions"
          component={GeneratedQuestionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
