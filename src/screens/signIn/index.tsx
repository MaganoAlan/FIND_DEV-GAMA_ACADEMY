import { useState, HTMLInputTypeAttribute } from "react";
import {
  Alert,
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
  Icons,
  Image,
  InputContainer,
  Logo,
  ScreenTitle,
} from "../signUp/styles";
import { SnackSuccess } from "../../components/SnackSuccess";
import { SnackError } from "../../components/SnackError";
import Button from "../../components/button";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackErr, setSnackErr] = useState(false);
  const [snackSuc, setSnackSuc] = useState(false);
  const [snackText, setSnackText] = useState("");
  /* console.log(email);
  console.log(password); */

  function handleSignIn() {
    if (!email || !password) {
      setSnackText("Por favor preencha todos os dados!");
      setSnackErr(true);
      return;
    }
    setSnackText("Login realizado!");
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
        source={require("../../assets/images/city_day.png")}
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
