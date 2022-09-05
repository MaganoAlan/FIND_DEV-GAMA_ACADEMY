import { Button as ButtonRN } from "react-native";

import { Container } from "./styles";

interface IButtonProps {
  title: string;
  onPress: () => void;
  //TODO - Analisar as props necessárias
}

//TODO - Implementar variações de tipos de botões, estilos, etc

export default function Button({ title, onPress }: IButtonProps) {
  return (
    <Container>
      <ButtonRN title={title} onPress={onPress} />
    </Container>
  );
}
