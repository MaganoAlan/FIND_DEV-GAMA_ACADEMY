import { Button, Title } from "./styles";

type IAppButton = {
  title: string;
  onPress: Function;
};

export default function AppButton({ title, onPress }: IAppButton) {
  return (
    <Button onPress={onPress}>
      <Title>{title}</Title>
    </Button>
  );
}
