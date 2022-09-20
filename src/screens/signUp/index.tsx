import { useState, HTMLInputTypeAttribute } from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StatusBar,
  View,
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
import {
  city_day,
  city_night,
  logo_day,
  logo_night,
} from "../../constants/resources";

export default function SignUp({ navigation }) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const [show, setShow] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [snackErr, setSnackErr] = useState(false);
  const [snackSuc, setSnackSuc] = useState(false);
  const [snackText, setSnackText] = useState("");

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
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
        }}
      >
        <Logo
          source={currentTheme === "light" ? logo_day : logo_night}
          alt="Logo"
        />

        <BlurCard>
          <View style={{ padding: 1, marginTop: 30 }}>
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
                secure={show}
                password
                showPassword={() => setShow(!show)}
                label="Senha:"
                placeholder="Mínimo 8 caracteres"
                value={password}
                onChangeText={(e: HTMLInputTypeAttribute) => setPassword(e)}
              />
            </InputContainer>
            <InputContainer>
              <DefaultInput
                secure={show}
                password
                showPassword={() => setShow(!show)}
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
              {/*<Button title="Cancelar" onPress={handleSignUp} />*/}
            </BtnContainer>
          </View>
        </BlurCard>
      </ImageBackground>
    </Container>
  );
}
