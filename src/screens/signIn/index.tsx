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
  function handleLogin() {
    //TODO: Trocar para rota correta
    /* navigation.navigate("Login"); */
    console.log("handleLogin");
  }

  function handleRegister() {
    //TODO: Trocar para rota correta
    /* navigation.navigate("signUp"); */
    console.log("handleRegister");
  }

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
          <Button title="Entrar" primary onPress={handleLogin} />
          <Button title="Cadastrar" onPress={handleRegister} />
        </ButtonsContainer>
      </FindDevContainer>
    </Container>
  );
}
