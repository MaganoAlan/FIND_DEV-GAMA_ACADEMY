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
<<<<<<< HEAD
    /* navigation.navigate("signIn"); */
    console.log("Know more");
=======
    navigation.navigate('signIn');
>>>>>>> ed3df73d19e82b680d05a45045b3764d63498b03
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
