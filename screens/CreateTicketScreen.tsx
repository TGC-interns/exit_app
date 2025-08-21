import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
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

  // Dropdown states
  const [instructionsModalVisible, setInstructionsModalVisible] = useState(false);
  const [questionsModalVisible, setQuestionsModalVisible] = useState(false);
  const [timeLimitModalVisible, setTimeLimitModalVisible] = useState(false);

  // Dropdown options
  const instructionsOptions = [
    "None",
    "🧠 Focus on conceptual clarity",
    "🧪 Include numerical or formula-based questions",
    "🛠️ Emphasize real-world applications",
    "🔍 Include commonly misunderstood concepts",
    "🎯 Prioritize definition-based questions",
    "🔄 Convert Above Text Questions into MCQs"

  ];

  const questionOptions = ["3", "4", "5", "6", "7", "8", "9", "10"];
  const timeLimitOptions = ["2 mins", "5 mins", "10 mins", "15 mins", "20 mins", "30 mins"];

  const handleGenerate = () => {
    navigation.navigate("GeneratedQuestions");
  };

  const renderDropdown = (
    visible: boolean,
    setVisible: (visible: boolean) => void,
    options: string[],
    onSelect: (option: string) => void,
    title: string
  ) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          <ScrollView style={styles.optionsList}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionItem}
                onPress={() => {
                  onSelect(option);
                  setVisible(false);
                }}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Header title="Create Exit Ticket" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Lesson Summary</Text>
          <CustomInput
            placeholder="Enter a brief summary of today's lesson..."
            value={lessonSummary}
            onChangeText={setLessonSummary}
            multiline
          />

          <Text style={styles.sectionTitle}>Instructions</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setInstructionsModalVisible(true)}
          >
            <Text style={[styles.dropdownText, !instructions && styles.placeholderText]}>
              {instructions || "Select instruction type..."}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Number of Questions</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setQuestionsModalVisible(true)}
          >
            <Text style={[styles.dropdownText, !numQuestions && styles.placeholderText]}>
              {numQuestions || "Select number of questions..."}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Time Limit</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setTimeLimitModalVisible(true)}
          >
            <Text style={[styles.dropdownText, !timeLimit && styles.placeholderText]}>
              {timeLimit || "Select time limit..."}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Generate Exit Ticket"
              onPress={handleGenerate}
            />
          </View>
        </View>
      </ScrollView>

      {renderDropdown(
        instructionsModalVisible,
        setInstructionsModalVisible,
        instructionsOptions,
        setInstructions,
        "Select Instructions"
      )}

      {renderDropdown(
        questionsModalVisible,
        setQuestionsModalVisible,
        questionOptions,
        setNumQuestions,
        "Number of Questions"
      )}

      {renderDropdown(
        timeLimitModalVisible,
        setTimeLimitModalVisible,
        timeLimitOptions,
        setTimeLimit,
        "Time Limit"
      )}
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
  },
  formContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
    marginTop: 16,
  },
  dropdownButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  dropdownText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
  placeholderText: {
    color: '#9ca3af',
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 32,
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxHeight: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionsList: {
    maxHeight: 300,
  },
  optionItem: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  optionText: {
    fontSize: 16,
    color: '#374151',
  },
  closeButton: {
    backgroundColor: '#ef4444',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CreateExitTicketScreen;