import { useState, HTMLInputTypeAttribute } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { DefaultInput } from "../../components/Input";
import {
  BlurCard,
  BtnContainer,
  Container,
  InputContainer,
  Logo,
  ScreenTitle,
} from "./styles";
import { SnackSuccess } from "../../components/SnackSuccess";
import { SnackError } from "../../components/SnackError";
import Button from "../../components/button";
import { useSelector } from "react-redux";
import { IThemeState } from "../../types/IThemeState";

const city_day = require("../../assets/images/city_day.png");
const city_night = require("../../assets/images/city_night.png");

export default function SignUp({ navigation }) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

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
      <ImageBackground
        source={currentTheme === "light" ? city_day : city_night}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Logo
          source={require("../../assets/images/logo_auth.png")}
          alt="Logo"
        />
        <ScrollView style={{ flex: 1, width: "100%", height: "100%" }}>
          {/* <ScreenTitle>Informe os dados para realizar seu cadastro</ScreenTitle> */}
          <BlurCard>
            <InputContainer>
              <DefaultInput
                label="Email:"
                placeholder="Informe seu email"
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
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
              ]}
              onPress={() => navigation.navigate("signIn")}
            >
              <ScreenTitle>Já tem uma conta? Entrar ➝</ScreenTitle>
            </Pressable>
            <BtnContainer>
              <Button primary title="Cadastrar" onPress={handleSignUp} />
              <Button title="Cancelar" onPress={handleSignUp} />
            </BtnContainer>
          </BlurCard>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
}
