import React, { useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { GlassEffectView } from "react-native-glass-effect-view";

export default function QuestionScreen() {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const options = ['Confidentiality', 'Compression', 'Availability', 'Authentication'];

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
          <Text style={styles.courseTitle}>Network Security</Text>
      </View>
      
      <ImageBackground 
        source={require('./assets/Vector.png')} 
        style={styles.background} resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.content}>
          
          {/* Question Card */}
          <GlassEffectView style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.questionNumber}>Question 1 of 3</Text>
              <Text style={styles.questionText}>
                Which of the following is NOT a basic goal of network security?
              </Text>

              {options.map((option, index) => {
                const isSelected = selectedOption === option; // check if selected
                return (
                  <TouchableOpacity 
                    key={index} 
                    style={[styles.option, isSelected && styles.optionSelected]} 
                    onPress={() => setSelectedOption(option)} // update state
                  >
                    <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              </View>
          </GlassEffectView>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        </ScrollView>
      </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 16, backgroundColor: '#dbeee3' },
  courseTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  content: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 25,
    backgroundColor: 'transparent',
    height: 400,
    width: 342,
    borderColor: '#ffffff',
  },
  cardContent: { flex: 1 },
  questionNumber: { 
    fontFamily: 'Poppins-SemiBold', 
    fontSize: 16, 
    marginBottom: 10, 
    color: '#004655', 
    textAlign: 'center', 
    width: '100%'  
  },
  questionText: { 
    fontFamily: 'Poppins-Medium', 
    fontSize: 16, 
    marginBottom: 20,
    textAlign: 'center', 
    width: '100%'  
  },
  option: {
    borderWidth: 1,
    borderColor: '#BFE0E7',
    padding: 12,
    borderRadius: 40,
    marginVertical: 6,
    alignItems: 'center',
  },
  optionSelected: {
    backgroundColor: '#E5FAFF', 
  },
  optionText: { 
    fontFamily: 'Poppins-Regular', 
    fontSize: 14, 
    textAlign: 'center',
  },
  optionTextSelected: {
    fontFamily: 'Poppins-SemiBold',
  },
  nextBtn: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 110,
  },
  nextText: { 
    color: '#fff', 
    fontFamily: 'Poppins-SemiBold', 
    fontSize: 14,
    textAlign: 'center'
  },
  background: {   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
