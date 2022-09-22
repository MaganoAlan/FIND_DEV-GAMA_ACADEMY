import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  height: 10%;
  background-color: #222e2f;
  width: 100%;
  elevation: 8;
`;

export const HIcon = styled.Pressable`
  margin-left: 4%;
  margin-right: 25%;
`;

export const HText = styled.Text`
  margin-left: 1%;
  margin-right: auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #fdfdfd;
`;
