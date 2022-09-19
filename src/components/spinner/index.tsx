import { ActivityIndicator } from "react-native";

import { Container } from "./styles";

interface ISpinnerProps {
  size?: number;
}

export default function Spinner({ size = 36 }: ISpinnerProps) {
  return (
    <Container>
      <ActivityIndicator size={size} />
    </Container>
  );
}
