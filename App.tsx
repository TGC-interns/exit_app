// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateExitTicketScreen from "./screens/CreateTicketScreen";
import GeneratedQuestionsScreen from "./screens/GeneratedQuestionsScreen";

export type RootStackParamList = {
  CreateExitTicket: undefined;
  GeneratedQuestions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateExitTicket">
        <Stack.Screen
          name="CreateExitTicket"
          component={CreateExitTicketScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GeneratedQuestions"
          component={GeneratedQuestionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
