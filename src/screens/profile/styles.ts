import styled from "styled-components/native";

export const StyledImage = styled.Image`
  width: 100%;
  height: 25%;
`;

export const AvatarImage = styled.Image`
  margin-top: -22%;
  width: 45%;
  height: 22.5%;
  border-radius: 120px;
  z-index: 100;
`;

export const StarContainer = styled.View`
  margin-top: 2%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const DevNameText = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  margin-top: 1%;
  color: #fff;
`;

export const DevInfoContainer = styled.View`
  width: 80%;
  margin-top: 2%;
  flex-direction: column;
  align-items: flex-start;
`;

export const DevInfo = styled.Text`
  margin-bottom: 1%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
`;

export const SocialIconsContainer = styled.View`
  width: 40%;
  margin-top: 4%;
  flex-direction: row;
`;

export const ButtonsContainer = styled.View`
  width: 80%;
  flex-direction: column;
  margin-top: 4%;
`;

export const ButtonsInLineContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonContainer = styled.View`
  width: 49%;
  margin-top: 3%;
  justify-content: space-evenly;
`;
