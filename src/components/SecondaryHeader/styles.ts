import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  height: 10%;
  width: 90%;
  border-color:#fdfdfd;
  border-bottom-width: 1px;
`;

export const HIcon = styled.Pressable`
  margin-left: 4%;
  margin-right: 25%;
  margin-bottom: 1%;
`;

export const HText = styled.Text`
  margin-left: 1%;
  margin-right: auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #fdfdfd;
  margin-bottom: 1%;
`;
