import { ReactNode } from "react";
import { Pressable } from "react-native";
import { Card, Container, Title } from "./styles";

type IShortcut = {
  title?: string;
  onPress: Function;
  icon?: ReactNode;
};

export function ShortcutCard({ title, onPress, icon }: IShortcut) {
  return (
    <Container>
      <Title>{title}</Title>
      <Pressable onPress={() => onPress}>
        <Card>{icon}</Card>
      </Pressable>
    </Container>
  );
}
