import { Text } from "react-native";

import { Container } from "./styles";

interface IHeaderProps {
  title: string;
  //TODO - Analisar as props necessárias
}

export default function Header({ title }: IHeaderProps) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
