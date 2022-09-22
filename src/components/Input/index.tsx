import React from "react";
import { Pressable } from "react-native";
import { Eye, EyeSlash } from "phosphor-react-native";
import { Container, InputContainer, InputTitle, NativeInput } from "./styles";

type InputProps = {
  value: string;
  onChangeText: Function;
  showPassword?: any;
  label?: string;
  placeholder?: string;
  secure?: boolean;
  password?: boolean;
};

export default function DefaultInput({
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
              <Eye color="#28393A" weight="regular" size={24} />
            </Pressable>
          ) : (
            <Pressable onPress={showPassword}>
              <EyeSlash color="#28393A" weight="regular" size={24} />
            </Pressable>
          )
        ) : undefined}
      </InputContainer>
    </Container>
  );
}
