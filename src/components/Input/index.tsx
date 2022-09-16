import React from "react";
// import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, InputTitle, NativeInput } from "./styles";

type InputProps = {
  value: string;
  onChangeText: Function;
  label?: string;
  placeholder?: string;
};

export function DefaultInput({
  value,
  onChangeText,
  label,
  placeholder,
}: InputProps) {
  return (
    <Container>
      <InputTitle>{label}</InputTitle>
      <NativeInput
        placeholder={placeholder}
        placeholderTextColor="#686868"
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  );
}
