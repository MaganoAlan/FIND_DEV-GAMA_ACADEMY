import { Pressable } from "react-native";
import { LinkedinLogo, GithubLogo, GoogleLogo } from "phosphor-react-native";
import { Container } from "./styles";

interface ISocialIconsProps {
  color: string;
  size?: number;
  onPressLinkedin: () => void;
  onPressGithub: () => void;
  onPressGoogle: () => void;
}

export default function SocialIcons({
  color,
  size = 36,
  onPressLinkedin,
  onPressGithub,
  onPressGoogle,
}: ISocialIconsProps) {
  return (
    <Container>
      <Pressable onPress={onPressLinkedin}>
        <LinkedinLogo color={color} weight="light" size={size} />
      </Pressable>
      <Pressable onPress={onPressGithub}>
        <GithubLogo color={color} weight="light" size={size} />
      </Pressable>
      <Pressable onPress={onPressGoogle}>
        <GoogleLogo color={color} weight="light" size={size} />
      </Pressable>
    </Container>
  );
}
