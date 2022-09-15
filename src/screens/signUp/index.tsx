import { useState, HTMLInputTypeAttribute } from "react";
import { Text, StatusBar, Button, Alert } from "react-native";
import { DefaultInput } from "../../components/Input";
import OkModal from "../../components/okModal";
import { BtnContainer, Container, InputContainer, ScreenTitle } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { SnackSuccess } from "../../components/SnackSuccess";
import { SnackError } from "../../components/SnackError";

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [snackErr, setSnackErr] = useState(false);
  const [snackSuc, setSnackSuc] = useState(false);
  const [snackText, setSnackText] = useState("");
  /* console.log(name);
  console.log(password); */

  function handleSignUp() {
    if (!name || !password || !confirm) {
      // Alert.alert("Erro", "Preencha todos os dados!");
      setSnackText("Por favor preencha todos os dados!");
      setSnackErr(true);
      return;
    }
    if (password !== confirm) {
      // Alert.alert("As senhas não são iguais");
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
      <ScreenTitle>Finalize seu cadastro</ScreenTitle>
      <InputContainer>
        <DefaultInput
          label="Nome:"
          placeholder="Informe seu nome"
          value={name}
          onChangeText={(e: HTMLInputTypeAttribute) => setName(e)}
        />
      </InputContainer>
      <InputContainer>
        <DefaultInput
          label="Senha"
          placeholder="Mínimo 8 caracteres"
          value={password}
          onChangeText={(e: HTMLInputTypeAttribute) => setPassword(e)}
        />
      </InputContainer>
      <InputContainer>
        <DefaultInput
          label="Repita a Senha"
          placeholder="Mínimo 8 caracteres"
          value={confirm}
          onChangeText={(e: HTMLInputTypeAttribute) => setConfirm(e)}
        />
      </InputContainer>
      <BtnContainer>
        <Button title="Cadastrar" onPress={handleSignUp} />
      </BtnContainer>
    </Container>
  );
}
