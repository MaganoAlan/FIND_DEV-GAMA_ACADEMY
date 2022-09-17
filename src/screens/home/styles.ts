import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const CityImage = styled.Image`
  width: 85%;
  height: 21.5%;
  margin-top: 10%;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const InLineContainer = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  width: 49%;
`;

export const SearchText = styled.Text`
  width: 85%;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: -8%;
`;
