import { DefaultButton, Title } from "./styles";

type IButtonProps = ButtonProps & {
  title: string;
  onPress: () => void;
  //TODO - Analisar as props necessárias
  //* qualquer coisa *
};

export type ButtonProps = {
  background: string;
};

//TODO - Implementar variações de tipos de botões, estilos, etc

export default function Button({ title, onPress, background }: IButtonProps) {
  return (
    <DefaultButton background={background} onPress={onPress}>
      <Title background={background}>{title}</Title>
    </DefaultButton>
  );
}
