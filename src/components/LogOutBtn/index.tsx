import { Container } from "./styles";
import { SignOut } from "phosphor-react-native";
import { Pressable } from "react-native";

type Props = {
  onPress: () => void;
};

export function LogOutBtn({ onPress }: Props) {
  return (
    <Container>
      <Pressable onPress={onPress}>
        <SignOut size={24} />
      </Pressable>
    </Container>
  );
}
