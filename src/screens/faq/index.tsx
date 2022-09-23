import { useState } from "react";
import { ScrollView, Linking, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { IThemeState } from "../../types/IThemeState";
import BackGround from "../../components/backGround";
import AppButton from "../../components/AppButton";
import BackButton from "../../components/BackButton";
import ThemeSwitch from "../../components/themeSwitch";
import OkModal from "../../components/okModal";

import {
  faq_light,
  faq_dark,
  logo_footer,
  alan,
  gabriel,
  leonardo,
  lucas,
  logo_acate,
  logo_gama,
} from "../../constants/resources";

import { TopImg } from "../main/styles";
import {
  BtnContainer,
  Dev,
  DEVS,
  FooterFaq,
  Mid,
  Subs,
  Title,
  LogoContainerExterno,
  LogoContainerInterno,
  LogoAcate,
  LogoGama,
} from "./styles";

export default function Faq(props) {
  const [faqResponse, setFaqResponse] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  function handleShowResponse(response: string) {
    setFaqResponse(response);
    setShowModal(true);
  }

  return (
    <BackGround>
      <TopImg source={currentTheme === "light" ? faq_light : faq_dark} />
      <ThemeSwitch />
      <BackButton navigation={() => props.navigation.goBack()} />
      <ScrollView>
        <Title>Developers</Title>
        <DEVS>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/alanmagano/")
            }
          >
            <Dev source={alan} alt="developer" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/gabriel-paulin0/")
            }
          >
            <Dev source={gabriel} alt="developer" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/leonardo-moura-92b513209/"
              )
            }
          >
            <Dev source={leonardo} alt="developer" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/lukeguima/")
            }
          >
            <Dev source={lucas} alt="developer" />
          </TouchableOpacity>
        </DEVS>
        <Title>FAQ</Title>
        <TouchableOpacity
          onPress={() => {
            handleShowResponse(
              `Find Dev tem como objetivo encontrar o talento ideal para seu projeto/ou encontrar aquela vaga tão desejada.`
            );
          }}
        >
          <Subs>1. O que é o App Find Dev?</Subs>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleShowResponse(
              `Find dev é 100% gratuito para desenvolvedores.`
            );
          }}
        >
          <Subs>2. Preciso pagar para me registrar?</Subs>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleShowResponse(
              `Realize uma busca por desenvolvedores na tela inicial, acesse o perfil do desenvolvedor e clique no botão 'Convidar'.`
            );
          }}
        >
          <Subs>
            3. Como posso convidar alguém para participar de um projeto?
          </Subs>
        </TouchableOpacity>
        <Mid>
          <Title>
            Projeto desenvolvido durante o Dev for Tech - ACATE / Gama Academy
          </Title>
          <BtnContainer>
            <AppButton
              title="NOS AVALIE NA PLAYSTORE"
              onPress={() => handleShowResponse(`Disponível em breve...`)}
            />
          </BtnContainer>
        </Mid>
        <LogoContainerExterno>
          <LogoContainerInterno>
            <LogoGama
              source={logo_gama}
              alt="logo da Gama Academy"
              resizeMode="contain"
            />
          </LogoContainerInterno>
          <LogoContainerInterno>
            <LogoAcate
              source={logo_acate}
              alt="logo da Acate"
              resizeMode="contain"
            />
          </LogoContainerInterno>
        </LogoContainerExterno>
      </ScrollView>
      <FooterFaq source={logo_footer} alt="logo Find Dev" />
      <OkModal
        type="none"
        showModal={showModal}
        title="Find Dev"
        text={faqResponse}
        setShowModal={setShowModal}
      />
    </BackGround>
  );
}
