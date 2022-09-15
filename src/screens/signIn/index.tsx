import Button from "../../components/button";
import {
  Container,
  DevContainer,
  DevImage,
  ProgrammerImage,
  FindDevContainer,
  Title,
  Subtitle,
  ButtonsContainer,
} from "./styles";

export default function Home({ navigation }) {
  return (
    <Container>
      <DevContainer>
        <DevImage source={require("../../assets/images/dev_1.png")} />
        <DevImage source={require("../../assets/images/dev_2.png")} />
        <DevImage source={require("../../assets/images/dev_3.png")} />
      </DevContainer>
      <ProgrammerImage source={require("../../assets/images/programmer.png")} />
      <FindDevContainer>
        <Title>Find Dev</Title>
        <Subtitle>The best place to find a tech talent</Subtitle>
        <ButtonsContainer>
          <Button title="Entrar" primary onPress={() => {}} />
          <Button
            title="Cadastrar"
            onPress={() => navigation.navigate("signUp")}
          />
        </ButtonsContainer>
      </FindDevContainer>
    </Container>
  );
}
