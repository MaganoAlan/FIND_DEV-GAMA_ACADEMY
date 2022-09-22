import styled from "styled-components/native";

export const CardPressable = styled.TouchableOpacity`
  width: 100%;
`;

export const DevInfoContainer = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 3% 3%;
`;

export const DevInfoText = styled.Text`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
`;

export const StarContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const TechContainer = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #ffca28;
  justify-content: center;
  align-items: center;
  margin: 0 5%;
`;

export const AvatarContainer = styled.View`
  margin: 0 5%;
`;

export const AvatarImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
