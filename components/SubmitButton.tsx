import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface SubmitButtonProps {
  label: string;
  onPress: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-blue-600 p-4 rounded-2xl mt-4"
    >
      <Text className="text-white text-center text-lg font-semibold">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
