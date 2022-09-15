import styled from "styled-components/native";

export const BackModal = styled.Pressable`
  flex: 1;
  background: #000;
  opacity: 0.7;
`;
export const Container = styled.View`
  width: 70%;
  height: 35%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  opacity: 1;
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 10%;
`;

export const Content = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10%;
`;

export const ModalBtn = styled.Pressable`
  background-color: #ffcf00;
  padding: 4px;
  border-radius: 10px;
`;
