import styled from "styled-components/native";
import { IStatusBar } from "./index";

export const TopImg = styled.Image<IStatusBar>`
  width: 100%;
  height: 30%;
  z-index: 9999;
`;

export const TouchableFilter = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #fdfdfd;
  border: 1px solid #000;
  margin: auto;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 1%;
  border-radius: 15px;
`;

export const FilterText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin-left: 10px;
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
  margin-top: 4%;
  margin-bottom: 2%;
`;

export const Shortcuts = styled.View`
  margin-top: 2%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5%;
`;

export const UserFav = styled.Image`
  width: 80%;
  height: 80%;
  border-radius: 20px;
`;

export const ThemeSwitch = styled.View`
  background-color: rgba(255, 202, 40, 0.8);
  border-radius: 100px;
  padding: 5px;
  position: absolute;
  top: 30px;
  right: 10px;
  z-index: 9999;
`;

export const FooterLogo = styled.Image`
  bottom: 0;
  margin-bottom: 5%;
`;

export const SubTitle = styled.Text`
  color: #fdfdfd;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: -10%;
  padding-left: 3%;
`;
