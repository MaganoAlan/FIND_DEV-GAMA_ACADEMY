import React from "react";
// import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, InputContainer, InputTitle, NativeInput } from "./styles";
import {Eye,EyeSlash} from 'phosphor-react-native'
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
