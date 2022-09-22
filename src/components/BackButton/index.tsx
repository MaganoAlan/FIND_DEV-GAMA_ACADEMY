import { Pressable } from "react-native";
import { Container } from "./styles";
import { ArrowUUpLeft } from "phosphor-react-native";

type Props = {
  navigation: any;
};

export function BackButton({ navigation }: Props) {
  return (
    <Container>
      <Pressable onPress={navigation}>
        <ArrowUUpLeft size={24} color="#000" />
      </Pressable>
    </Container>
  );
}
