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

export default function ForgotPassword({ navigation }) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const [show, setShow] = useState(true);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [verifyCode, setVerifyCode] = useState(false)
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [sendCode, setSendCode] = useState(false);
  const [snackErr, setSnackErr] = useState(false);
  const [snackSuc, setSnackSuc] = useState(false);
  const [snackText, setSnackText] = useState("");

  function handleSendCode() {
    if (!email) {
      setSnackText("Por favor informe o seu email!");
      setSnackErr(true);
      return;
    }
    Auth.forgotPassword(email)
      .then(data => {
        setSnackText("Código enviado para o email!");
        setSnackSuc(true);
        setSendCode(true);
      })
      .catch(err => {
        setSnackText("Email não encontrado!");
        setSnackErr(true);
      });
    return;
  }

  function handleForgotPassword() {
    if (password !== confirm) {
      setSnackText("As senhas não são iguais.");
      setSnackErr(true);
      return;
    }
    Auth.forgotPasswordSubmit(email, code, password)
      .then(data => {
        setSnackText("Senha alterada com sucesso!");
        setSnackSuc(true);
        navigation.navigate("signIn")
      })
      .catch(err => {
        setSnackText("Erro!");
        setSnackErr(true);
      });
    return;
  }

  function renderStep1() {
    return (
      <View>
        <InputContainer>
          <DefaultInput
            label="Email:"
            placeholder="Informe o email cadastrado"
            value={email}
            onChangeText={(e: HTMLInputTypeAttribute) => setEmail(e)}
          />
        </InputContainer>
        <BtnContainer>
          <Button primary title="Enviar código" onPress={handleSendCode} />
          <Button title="Cancelar" onPress={() => { navigation.navigate("signIn") }} />
        </BtnContainer>
      </View>
    );
  }

  function renderStep2() {
    return (
      <View>
        <InputContainer>
          <DefaultInput
            label="Código de verificação:"
            placeholder="Informe o código"
            value={code}
            onChangeText={(e: HTMLInputTypeAttribute) => setCode(e)}
          />
        </InputContainer>
        <BtnContainer>
          <Button primary title="Avançar" onPress={() => { setVerifyCode(true) }} />
        </BtnContainer>
      </View>
    )
  }

  function renderStep3() {
    return (
      <View>
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
        <BtnContainer>
          <Button primary title="Concluir" onPress={handleForgotPassword} />
        </BtnContainer>
      </View>
    )
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
              {!sendCode && !verifyCode && renderStep1()}
              {sendCode && !verifyCode && renderStep2()}
              {verifyCode && renderStep3()}
            </View>
          </BlurCard>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
}
