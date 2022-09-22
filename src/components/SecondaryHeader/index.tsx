import { Container, HIcon, HText } from "./styles";
import { ArrowUUpLeft } from "phosphor-react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export function SecondaryHeader({ title, onPress }: Props) {
  return (
    <Container>
      <HIcon onPress={onPress}>
        <ArrowUUpLeft size={32} color="#fdfdfd" />
      </HIcon>
      <HText>{title}</HText>
    </Container>
  );
}
