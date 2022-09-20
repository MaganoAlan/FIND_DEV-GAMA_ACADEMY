import { useState, HTMLInputTypeAttribute } from "react";
import {
  ImageBackground,
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
} from "./styles";
import { SnackSuccess } from "../../components/SnackSuccess";
import { SnackError } from "../../components/SnackError";
import Button from "../../components/button";
import { useSelector } from "react-redux";
import { IThemeState } from "../../types/IThemeState";
import { Auth } from 'aws-amplify';

const city_day = require("../../assets/images/city_day.png");
const city_night = require("../../assets/images/city_night.png");

export default function VerifyAccount({ navigation, route }) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const [code, setCode] = useState("");
  const [snackErr, setSnackErr] = useState(false);
  const [snackSuc, setSnackSuc] = useState(false);
  const [snackText, setSnackText] = useState("");

  async function handleVerifyAccount() {
    if (!code) {
      setSnackText("Informe o código enviado no email");
      setSnackErr(true);
      return;
    }
    try {
      await Auth.confirmSignUp(route.params.email, code);
      setSnackText("Conta verificada com sucesso!");
      setSnackSuc(true);
    } catch (error) {
      setSnackText(error.message);
      setSnackErr(true);
    }
    return;
  }

  async function handleResendCode() {
    try {
      await Auth.resendSignUp(route.params.email);
      setSnackText("Código reenviado!");
      setSnackSuc(true);
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
          <BlurCard>
            <InputContainer>
              <DefaultInput
                label="Code:"
                placeholder="Informe o código"
                value={code}
                onChangeText={(e: HTMLInputTypeAttribute) => setCode(e)}
              />
            </InputContainer>
            <BtnContainer>
              <Button primary title="Verificar" onPress={handleVerifyAccount} />
              <Button title="Reenviar código" onPress={handleResendCode} />
            </BtnContainer>
          </BlurCard>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
}
