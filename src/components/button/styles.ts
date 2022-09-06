import styled from "styled-components/native";

import { ButtonProps } from "./index";

export const DefaultButton = styled.Pressable<ButtonProps>`
  background-color: ${({ background }) =>
    background === "primary" ? "#fdc2c2" : " #fff"};
`;

export const Title = styled.Text<ButtonProps>``;
