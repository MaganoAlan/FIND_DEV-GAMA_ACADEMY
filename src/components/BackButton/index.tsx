import { Pressable } from "react-native";
import { Container } from "./styles";
import { ArrowUUpLeft } from "phosphor-react-native";

type BackButtonProps = {
  navigation: any;
};

export default function BackButton({ navigation }: BackButtonProps) {
  return (
    <Container>
      <Pressable onPress={navigation}>
        <ArrowUUpLeft size={24} color="#000" />
      </Pressable>
    </Container>
  );
}
