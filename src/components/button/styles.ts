import styled from "styled-components/native";

import { ButtonProps } from "./index";

export const DefaultButton = styled.Pressable<ButtonProps>`
  background-color: ${({ background, theme }) =>
    background === "primary" ? theme.colors.primary[600] : "#000"};
  padding: 8px;
  margin: 10px;
  min-width: 50%;
  border-radius: 15px;
  border: ${({ background, theme }) =>
    background === "primary" ? "none" : theme.colors.primary[600]};
`;

export const Title = styled.Text<ButtonProps>`
  font-size: 16px;
  text-align: center;
  color: ${({ background, theme }) =>
    background === "primary" ? "#000 " : theme.colors.primary[600]};
`;
