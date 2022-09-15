import styled from "styled-components/native";

import { IButtonProps } from "./index";

export const DefaultButton = styled.Pressable<IButtonProps>`
  width: 100%;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary[600] : "#000"};
  padding: 8px;
  margin-top: 10px;
  border-radius: 10px;
  border: ${({ primary, theme }) =>
    primary ? "none" : theme.colors.primary[600]};
`;

export const Title = styled.Text<IButtonProps>`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({ primary, theme }) =>
    primary ? "#000 " : theme.colors.primary[600]};
`;
