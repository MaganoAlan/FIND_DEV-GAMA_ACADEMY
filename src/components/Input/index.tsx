import React from "react";
// import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, InputContainer, InputTitle, NativeInput } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

type InputProps = {
  value: string;
  onChangeText: Function;
  showPassword?: any;
  label?: string;
  placeholder?: string;
  secure?: boolean;
  password?: boolean;
};

export function DefaultInput({
  value,
  onChangeText,
  label,
  placeholder,
  secure = false,
  password = false,
  showPassword,
}: InputProps) {
  return (
    <Container>
      <InputTitle>{label}</InputTitle>
      <InputContainer>
        <NativeInput
          secureTextEntry={secure}
          placeholder={placeholder}
          placeholderTextColor="#686868"
          value={value}
          onChangeText={onChangeText}
        />
        {password ? (
          secure ? (
            <Pressable onPress={showPassword}>
              <Feather name="eye" size={24} color="black" />
            </Pressable>
          ) : (
            <Pressable onPress={showPassword}>
              <Feather name="eye-off" size={24} color="black" />
            </Pressable>
          )
        ) : undefined}
      </InputContainer>
    </Container>
  );
}
