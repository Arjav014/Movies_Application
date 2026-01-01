import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const SearchBar = ({
  placeholder,
  onPress,
  value,
  onChangeText,
}: {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text:string) => void;
}) => {
  return (
    <View className="flex-row items-center bg-dark-200 px-5 py-2 rounded-full">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
