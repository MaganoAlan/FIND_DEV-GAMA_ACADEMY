import styled from "styled-components/native";
import { IStatusBar } from "./index";

export const Container = styled.View``;

export const TopImg = styled.Image<IStatusBar>`
  width: 100%;
  height: 25%;
  //margin-top: ${({ height }) => height}px;
  z-index: 9999;
`;

export const Stacks = styled.ScrollView`
  max-height: 22%;
  width: 60%;
`;

export const CheckLine = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckText = styled.Text`
  color: #fdfdfd;
`;

export const BtnContainer = styled.View`
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 2%;
`;

export const Shortcuts = styled.View`
  margin-top: 2%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const UserFav = styled.Image`
  width: 90%;
  height: 90%;
`;

export const ThemeSwitch = styled.View`
  background-color: #ffca28;
  border-radius: 100px;
  padding: 5px;
  position: absolute;
  top: 30px;
  right: 10px;
  z-index: 9999;
`;

export const FooterLogo = styled.Image`
  bottom: 0;
  margin-top: 5%;
`;

export const SubTitle = styled.Text`
  color: #fdfdfd;
  font-size: 16px;
  font-weight: 600;
  margin-top: 2%;
  margin-bottom: -5%;
  padding-left: 3%;
`;
