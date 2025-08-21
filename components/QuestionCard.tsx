import React from "react";
import { View, Text, TextInput } from "react-native";

interface QuestionCardProps {
  question: string;
  index: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, index }) => {
  return (
    <View className="bg-white p-4 rounded-2xl shadow mb-3">
      <Text className="text-base font-semibold mb-2">
        Q{index + 1}: {question}
      </Text>
      <TextInput
        placeholder="Type your answer..."
        multiline
        className="border border-gray-300 rounded-xl p-2 text-sm"
      />
    </View>
  );
};

export default QuestionCard;
