import { DefaultButton, Title } from "./styles";

export type IButtonProps = {
  title: string;
  primary?: boolean;
  onPress: () => void;
};

export default function Button({
  title,
  onPress,
  primary = false,
}: IButtonProps) {
  return (
    <DefaultButton primary={primary} onPress={onPress}>
      <Title primary={primary}>{title.toUpperCase()}</Title>
    </DefaultButton>
  );
}
