import Button from "../../components/button";
import {
  Container,
  DevContainer,
  DevImage,
  ProgrammerImage,
  FindDevContainer,
  Title,
  Subtitle,
  KnowMoreContainer,
  KnowMoreText,
  Buttons,
} from "./styles";

export default function Home({ navigation }) {
  function handlePressKnowMore() {
    //TODO: Trocar para rota correta
    /* navigation.navigate("signIn"); */
    console.log("Know more");
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
        <Buttons>
          <Button title="Login" background="primary" onPress={() => {}} />
          <Button title="Cadastrar" background="secondary" onPress={() => {}} />
        </Buttons>
      </FindDevContainer>
    </Container>
  );
}
