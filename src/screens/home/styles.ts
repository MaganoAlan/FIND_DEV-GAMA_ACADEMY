import styled from "styled-components";
import {
  getProportionalHeightByPixel,
  getProportionalWidthByPixel,
} from "../../utils";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
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

export const KnowMoreContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${getProportionalHeightByPixel(188)}px;
  width: ${getProportionalWidthByPixel(318)}px;
  height: ${getProportionalHeightByPixel(70)}px;
  background: #ffca28;
  border-radius: 24px;
`;

export const KnowMoreText = styled.Text`
  //font-family: "Inter";
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #000;
`;
