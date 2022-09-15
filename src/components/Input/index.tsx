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
        placeholderTextColor="#c2c2c2"
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  );
}
