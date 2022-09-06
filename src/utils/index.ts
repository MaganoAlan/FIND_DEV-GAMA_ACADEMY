import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export function getProportionalHeightByPixel(heightPixel: number) {
  return (height * (heightPixel / 9.26)) / 100;
}

export function getProportionalWidthByPixel(widthPixel: number) {
    return (width * (widthPixel / 4.28)) / 100;
  }
