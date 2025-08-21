import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-blue-600 rounded-xl p-4 my-2"
      onPress={onPress}
    >
      <Text className="text-white text-center font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
