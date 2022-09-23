import { useState, HTMLInputTypeAttribute } from "react";
import { ImageBackground, ScrollView, StatusBar } from "react-native";
import { Auth } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { beLogged } from "../../store/modules/Auth.store";
import { IThemeState } from "../../types/IThemeState";
import SnackSuccess from "../../components/SnackSuccess";
import SnackError from "../../components/SnackError";
import DefaultInput from "../../components/Input";
import Button from "../../components/button";

import {
  BlurCard,
  BtnContainer,
  Container,
  InputContainer,
  Logo,
} from "./styles";

const city_day = require("../../assets/images/city_day.png");
const city_night = require("../../assets/images/city_night.png");

export default function VerifyAccount({ route }) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const dispatch = useDispatch();

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
      await Auth.confirmSignUp(route?.params?.email, code);
      setSnackText("Conta verificada com sucesso!");
      setSnackSuc(true);
      dispatch(beLogged(route?.params?.email));
    } catch (error) {
      setSnackText(error.message);
      setSnackErr(true);
    }
    return;
  }

  async function handleResendCode() {
    try {
      await Auth.resendSignUp(route?.params?.email);
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
                label="Código:"
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
