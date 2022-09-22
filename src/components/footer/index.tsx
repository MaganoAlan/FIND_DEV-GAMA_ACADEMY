import { Container, Title, Subtitle } from "./styles";

interface IFooterProps {
  title?: string;
  subtitle?: string;
}

export default function Footer({
  title = "Find Dev",
  subtitle = "THE BEST PLACE TO FIND A TECH TALENT",
}: IFooterProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
