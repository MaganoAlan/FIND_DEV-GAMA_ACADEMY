import { FigmaMarginTop } from "./../../constants/resolution";
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
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const BtnContainer = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 80%;
`;

export const BlurCard = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  width: 95%;
  padding: 5px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15%;
`;

export const Logo = styled.Image`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${FigmaMarginTop};
`;

export const Icons = styled.View`
  flex-direction: row;
  width: 60%;
  margin-top: 4%;
  margin-bottom: 4%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-evenly;
`;

export const SwitchTheme = styled.View`
  margin-left: auto;
  margin-right: 2%;
`;

export const SwitchButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SocialContainer = styled.View`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.primary[600]};
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

export const SocialText = styled.Text`
  margin-top: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 2px;
  text-align: center;
`;
