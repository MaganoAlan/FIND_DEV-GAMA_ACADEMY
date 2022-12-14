import styled from "styled-components/native";

import { ModalTheme } from "./index";

export const BackModal = styled.Pressable`
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
`;
export const Container = styled.View<ModalTheme>`
  width: 70%;
  height: 35%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ currentTheme }) =>
    currentTheme === "light" ? "#2a3a3bff" : "#000000ff"};
  border-radius: 15px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 0px 0px 0px 5px;
  color: #fdfdfd;
`;

export const Content = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10%;
  color: #fdfdfd;
`;

export const ModalBtn = styled.Pressable`
  background-color: #ffcf00;
  padding: 4px;
  border-radius: 10px;
`;
