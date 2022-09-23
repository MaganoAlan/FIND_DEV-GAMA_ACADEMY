import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { IThemeState } from "../../types/IThemeState";
import BackGround from "../../components/backGround";
import AppButton from "../../components/AppButton";
import BackButton from "../../components/BackButton";
import ThemeSwitch from "../../components/themeSwitch";

import {
  faq_light,
  faq_dark,
  logo_footer,
  alan,
  gabriel,
  leonardo,
  lucas,
} from "../../constants/resources";

import { TopImg } from "../main/styles";
import { BtnContainer, Dev, DEVS, FooterFaq, Mid, Subs, Title } from "./styles";

export function FAQ(props) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );
  return (
    <BackGround>
      <TopImg source={currentTheme === "light" ? faq_light : faq_dark} />
      <ThemeSwitch/>
      <BackButton navigation={() => props.navigation.goBack()} />
      <ScrollView>
        <Title>Developers</Title>
        <DEVS>
          <Dev source={alan} alt="developer" />
          <Dev source={gabriel} alt="developer" />
          <Dev source={leonardo} alt="developer" />
          <Dev source={lucas} alt="developer" />
        </DEVS>
        <Title>FAQ</Title>
        <Subs>1. O que é o App Find Dev?</Subs>
        <Subs>2. Preciso pagar para me registrar?</Subs>
        <Subs>
          3. Como posso convidar alguém para participar de um projeto?
        </Subs>
        <Mid>
          <Title>
            Projeto desenvolvido durante o Dev for Tech - ACATE / Gama Academy
          </Title>
          <BtnContainer>
            <AppButton title="NOS AVALIE NA PLAYSTORE" onPress={() => {}} />
          </BtnContainer>
        </Mid>
      </ScrollView>
      <FooterFaq source={logo_footer} />
    </BackGround>
  );
}
