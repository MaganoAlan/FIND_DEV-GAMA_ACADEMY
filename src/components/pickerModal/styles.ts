import styled from "styled-components/native";

export const BackModal = styled.Pressable`
  flex: 1;
  background: #000;
  opacity: 0.7;
`;
export const Container = styled.View`
  width: 70%;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const TitleContainer = styled.View`
  margin: 5% auto;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 0 5px;
  color: #fff;
`;

export const TitleButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 0 5px;
  color: #000;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;

export const StyledPressable = styled.Pressable`
  background-color: #ffcf00;
  padding: 2% 0;
  border-radius: 20px;
  margin: 5% auto;
  width: 70%;
`;
