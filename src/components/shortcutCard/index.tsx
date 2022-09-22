import { ReactNode } from "react";
import { Pressable } from "react-native";
import { Card, DevCard, Container, Title } from "./styles";

type IShortcut = {
  title?: string;
  onPress: () => void;
  icon?: ReactNode;
  iconDev?: ReactNode;
};

export function ShortcutCard({ title, onPress, icon }: IShortcut) {
  return (
    <Container>
      <Title>{title}</Title>
      <Pressable onPress={onPress}>
        <Card>{icon}</Card>
      </Pressable>
    </Container>
  );
}

export function ShortcutFavoriteCard({ title, onPress, iconDev }: IShortcut) {
  return (
    <Container>
      <Title>{title}</Title>
      <Pressable onPress={onPress}>
        <DevCard>{iconDev}</DevCard>
      </Pressable>
    </Container>
  );
}
