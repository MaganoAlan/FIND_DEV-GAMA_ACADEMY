import { useState, HTMLInputTypeAttribute } from "react";
import { ScrollView, StatusBar } from "react-native";
import { DefaultInput } from "../../components/Input";
import {
  BtnContainer,
  Container,
  Image,
  InputContainer,
  ScreenTitle,
} from "./styles";
import { SnackSuccess } from "../../components/SnackSuccess";
import { SnackError } from "../../components/SnackError";
import Button from "../../components/button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [snackErr, setSnackErr] = useState(false);
  const [snackSuc, setSnackSuc] = useState(false);
  const [snackText, setSnackText] = useState("");
  /* console.log(email);
  console.log(password); */

  function handleSignUp() {
    if (!email || !password || !confirm) {
      setSnackText("Por favor preencha todos os dados!");
      setSnackErr(true);
      return;
    }
    if (password !== confirm) {
      setSnackText("As senhas não são iguais.");
      setSnackErr(true);
      return;
    }
    setSnackText("Cadastro realizado com sucesso!");
    setSnackSuc(true);
    return;
  }

  return (
    <Container>
      <StatusBar />
      <ScrollView style={{ flex: 1, width: "100%", height: "100%" }}>
        <Image
          source={require("../../assets/images/header.png")}
          alt="imagem de findDev"
          resizeMode="cover"
        />
        <SnackSuccess
          text={snackText}
          visible={snackSuc}
          setVisible={setSnackSuc}
        />
        <SnackError
          text={snackText}
          visible={snackErr}
          setVisible={setSnackErr}
        />
        <ScreenTitle>Informe os dados para realizar seu cadastro</ScreenTitle>
        <InputContainer>
          <DefaultInput
            label="Email:"
            placeholder="Informe seu nome"
            value={email}
            onChangeText={(e: HTMLInputTypeAttribute) => setEmail(e)}
          />
        </InputContainer>
        <InputContainer>
          <DefaultInput
            label="Senha:"
            placeholder="Mínimo 8 caracteres"
            value={password}
            onChangeText={(e: HTMLInputTypeAttribute) => setPassword(e)}
          />
        </InputContainer>
        <InputContainer>
          <DefaultInput
            label="Repita a Senha:"
            placeholder="Mínimo 8 caracteres"
            value={confirm}
            onChangeText={(e: HTMLInputTypeAttribute) => setConfirm(e)}
          />
        </InputContainer>
        <BtnContainer>
          <Button primary title="Cadastrar" onPress={handleSignUp} />
          <Button title="Cancelar" onPress={handleSignUp} />
        </BtnContainer>
      </ScrollView>
    </Container>
  );
}
