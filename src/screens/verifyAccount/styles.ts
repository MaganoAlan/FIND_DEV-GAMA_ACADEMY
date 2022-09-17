import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputContainer = styled.View`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const ScreenTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 5%;
  color: ${({ theme }) => theme.colors.text};
`;

export const BtnContainer = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 80%;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const BlurCard = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  width: 95%;
  padding: 5px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30%;
`;

export const Logo = styled.Image`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
`;

export const Icons = styled.View`
  flex-direction: row;
  width: 60%;
  margin-top: 4%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-evenly;
`;

export const SwitchTheme = styled.View`
  margin-left: auto;
  margin-right: 2%;
`;

export const SwitchButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const SwitchText = styled.Text`
  color: #fdfdfd;
  padding-right: 4px;
`;
