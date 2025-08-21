import React from "react";
import { View, Text, FlatList } from "react-native";

const dummyQuestions = [
  { id: "1", text: "What was the key takeaway from today’s lesson?" },
  { id: "2", text: "Explain one concept in your own words." },
  { id: "3", text: "Rate your understanding from 1-5." },
];

const GeneratedQuestionsScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-4">Generated Questions</Text>

      <FlatList
        data={dummyQuestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border border-gray-300 rounded-xl p-4 mb-3">
            <Text className="text-base">{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GeneratedQuestionsScreen;
