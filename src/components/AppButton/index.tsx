import { Button, Title } from "./styles";

type IAppButton = {
  title: string;
  onPress: Function;
};

export function AppButton({ title, onPress }: IAppButton) {
  return (
    <Button onPress={onPress}>
      <Title>{title}</Title>
    </Button>
  );
}
