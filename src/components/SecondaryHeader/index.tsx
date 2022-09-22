import { Container, HIcon, HText } from "./styles";
import { ArrowUUpLeft } from "phosphor-react-native";

type IHeaderProps = {
  title: string;
  onPress: () => void;
};

export default function SecondaryHeader({ title, onPress }: IHeaderProps) {
  return (
    <Container>
      <HIcon onPress={onPress}>
        <ArrowUUpLeft size={32} color="#fdfdfd" />
      </HIcon>
      <HText>{title}</HText>
    </Container>
  );
}
