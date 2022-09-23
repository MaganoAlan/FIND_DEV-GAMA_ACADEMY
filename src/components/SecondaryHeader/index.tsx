import { ArrowUUpLeft } from "phosphor-react-native";
import ThemeSwitch from "../themeSwitch";
import { Container, HIcon, HText } from "./styles";

type IHeaderProps = {
  title: string;
  onPress: () => void;
};

export default function SecondaryHeader({ title, onPress }: IHeaderProps) {
  return (
    <Container>
      <ThemeSwitch />
      <HIcon onPress={onPress}>
        <ArrowUUpLeft size={32} color="#fdfdfd" />
      </HIcon>
      <HText>{title}</HText>
    </Container>
  );
}
