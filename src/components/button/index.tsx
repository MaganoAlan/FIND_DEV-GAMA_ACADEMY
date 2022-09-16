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
    <DefaultButton
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "#858585"
            : primary
            ? "#28393A"
            : "#fdfdfd",
        },
      ]}
      primary={primary}
      onPress={onPress}
    >
      <Title primary={primary}>{title}</Title>
    </DefaultButton>
  );
}
