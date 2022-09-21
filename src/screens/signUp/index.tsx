import { useState, HTMLInputTypeAttribute } from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
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
import { Auth } from "aws-amplify";
import Spinner from "../../components/spinner";

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
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    setLoading(true);
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
    try {
      await Auth.signUp({
        username: email,
        password: password,
        autoSignIn: {
          enabled: true,
        },
      });
      setSnackText("Cadastro realizado com sucesso!");
      setSnackSuc(true);
      setLoading(false);
      navigation.navigate("verifyAccount", { email: email });
    } catch (error) {
      setSnackText(error.name);
      setSnackErr(true);
      setLoading(false);
    }
    return;
  }

  function renderButton() {
    if (loading) {
      return (
        <BtnContainer>
          <Spinner />
        </BtnContainer>
      );
    }
    return (
      <BtnContainer>
        <Button primary title="Cadastrar" onPress={handleSignUp} />
      </BtnContainer>
    );
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
      <ScrollView>
        <ImageBackground
          source={currentTheme === "light" ? city_day : city_night}
          resizeMode="cover"
          style={{
            position: "relative",
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
              <BtnContainer>{renderButton()}</BtnContainer>
            </View>
          </BlurCard>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
}
