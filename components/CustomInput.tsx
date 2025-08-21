import React from "react";
import { TextInput } from "react-native";

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  multiline = false,
}) => {
  return (
    <TextInput
      className="border border-gray-300 rounded-xl p-3 my-2"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
    />
  );
};

export default CustomInput;
