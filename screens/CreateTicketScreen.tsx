import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  CreateExitTicket: undefined;
  GeneratedQuestions: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "CreateExitTicket">;
};

const CreateExitTicketScreen: React.FC<Props> = ({ navigation }) => {
  const [lessonSummary, setLessonSummary] = useState("");
  const [instructions, setInstructions] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-4">Create Exit Ticket</Text>

      <CustomInput
        placeholder="Lesson Summary"
        value={lessonSummary}
        onChangeText={setLessonSummary}
        multiline
      />
      <CustomInput
        placeholder="Instructions"
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />
      <CustomInput
        placeholder="Number of Questions"
        value={numQuestions}
        onChangeText={setNumQuestions}
      />
      <CustomInput
        placeholder="Time Limit (mins)"
        value={timeLimit}
        onChangeText={setTimeLimit}
      />

      <CustomButton
        title="Generate"
        onPress={() => navigation.navigate("GeneratedQuestions")}
      />
    </View>
  );
};

export default CreateExitTicketScreen;
