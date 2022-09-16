import { ActivityIndicator } from "react-native";

import { Container } from "./styles";

export default function Spinner() {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
}
