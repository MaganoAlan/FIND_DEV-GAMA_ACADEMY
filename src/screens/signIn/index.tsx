import { useState, HTMLInputTypeAttribute } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
} from "react-native";
import { DefaultInput } from "../../components/Input";
import {
  BlurCard,
  BtnContainer,
  Container,
  Icons,
  InputContainer,
  Logo,
  ScreenTitle,
  SwitchButton,
  SwitchText,
  SwitchTheme,
} from "../signUp/styles";
import { SnackSuccess } from "../../components/SnackSuccess";
import { SnackError } from "../../components/SnackError";
import Button from "../../components/button";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { IThemeState } from "../../types/IThemeState";
import { useDispatch } from "react-redux";
import { toDarkTheme, toLightTheme } from "../../store/modules/Theme.store";
import { Auth } from 'aws-amplify';

const city_day = require("../../assets/images/city_day.png");
const city_night = require("../../assets/images/city_night.png");

export default function SignIn({ navigation }) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackErr, setSnackErr] = useState(false);
  const [snackSuc, setSnackSuc] = useState(false);
  const [snackText, setSnackText] = useState("");
  /* console.log(email);
  console.log(password); */

  function setDarkTheme() {
    dispatch(toDarkTheme());
  }
  function setLightTheme() {
    dispatch(toLightTheme());
  }

  async function handleSignIn() {
    if (!email || !password) {
      setSnackText("Por favor preencha todos os dados!");
      setSnackErr(true);
      return;
    }
    try {
      const user = await Auth.signIn(email, password);
      setSnackText("Login realizado!");
      setSnackSuc(true);

      console.log(user.data)

    } catch (error) {
      setSnackText(error.name);
      setSnackErr(true);
    }
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
            <SwitchTheme>
              {currentTheme === "light" ? (
                <SwitchButton onPress={setDarkTheme}>
                  <SwitchText>Tema escuro</SwitchText>
                  <Feather name="moon" size={24} color="#fdfdfd" />
                </SwitchButton>
              ) : (
                <SwitchButton onPress={setLightTheme}>
                  <SwitchText>Tema claro</SwitchText>
                  <Feather name="sun" size={24} color="#fdfdfd" />
                </SwitchButton>
              )}
            </SwitchTheme>
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
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
              ]}
              onPress={() => navigation.navigate("signUp")}
            >
              <ScreenTitle>Não possui uma conta? Cadastre-se ➝</ScreenTitle>
            </Pressable>
            <BtnContainer>
              <Button primary title="Entrar" onPress={handleSignIn} />
            </BtnContainer>
            <ScreenTitle>Ou faça login com:</ScreenTitle>
            <Icons>
              <Pressable
                onPress={() => {
                  Alert.alert("Logar com: LinkedIn?");
                }}
              >
                <Feather name="linkedin" size={32} color="#28393A" />
              </Pressable>
              <Pressable
                onPress={() => {
                  Alert.alert("Logar com: GitHub?");
                }}
              >
                <Feather name="github" size={32} color="#28393A" />
              </Pressable>
              <Pressable
                onPress={() => {
                  Alert.alert("Logar com: Google?");
                }}
              >
                <FontAwesome name="google" size={32} color="#28393A" />
              </Pressable>
            </Icons>
          </BlurCard>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
}
