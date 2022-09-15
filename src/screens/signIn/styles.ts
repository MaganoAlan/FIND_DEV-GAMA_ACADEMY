import styled from "styled-components/native";
import {
  getProportionalHeightByPixel,
  getProportionalWidthByPixel,
} from "../../utils";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 0;
  padding: 0;
`;

export const DevContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #161620;
  width: ${getProportionalWidthByPixel(375)}px;
  height: ${getProportionalHeightByPixel(91)}px;
  border-radius: 50px;
  margin-top: ${getProportionalHeightByPixel(48)}px;
`;

export const DevImage = styled.Image`
  width: ${getProportionalWidthByPixel(70)}px;
  height: ${getProportionalHeightByPixel(70)}px;
  border-radius: ${getProportionalWidthByPixel(70)}px;
  margin: 0 ${getProportionalWidthByPixel(18)}px;
`;

export const ProgrammerImage = styled.Image`
  margin-top: ${getProportionalHeightByPixel(58)}px;
  width: ${getProportionalWidthByPixel(373)}px;
  height: ${getProportionalHeightByPixel(282)}px;
`;

export const FindDevContainer = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: #161620;
  width: ${getProportionalWidthByPixel(430)}px;
  height: ${getProportionalHeightByPixel(463)}px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: ${getProportionalHeightByPixel(55)}px;
  //font-family: "Baunk";
  font-weight: 400;
  font-size: 48px;
  line-height: 46px;
  color: #ffca28;
`;

export const Subtitle = styled.Text`
  //font-family: "Inter";
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #d9a909;
`;

export const ButtonsContainer = styled.View`
  width: ${getProportionalWidthByPixel(318)}px;
  height: ${getProportionalWidthByPixel(162)}px;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${getProportionalHeightByPixel(82)}px;
  margin-top: ${getProportionalHeightByPixel(101)}px;
`;
