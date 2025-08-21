import React from "react";
import { View, Text } from "react-native";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="w-full bg-blue-500 p-4 rounded-b-2xl shadow">
      <Text className="text-white text-xl font-bold text-center">{title}</Text>
    </View>
  );
};

export default Header;
