import { Image } from "react-native";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Image source={require("../../assets/images/logo.png")} />
    </Container>
  );
}
