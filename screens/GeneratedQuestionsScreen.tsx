import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";

const dummyQuestions = [
  { id: "1", text: "Why is yarn better than npm?" },
  { id: "2", text: "How will you integrate this project?" },
  { id: "3", text: "What do you think about App Development?" },
];

const GeneratedQuestionsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Generated Questions" />
      
      <View style={styles.content}>
        <FlatList
          data={dummyQuestions}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.questionCard}>
              <Text style={styles.questionNumber}>Question {index + 1}</Text>
              <Text style={styles.questionText}>{item.text}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  questionNumber: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 24,
  },
});

export default GeneratedQuestionsScreen;