import { useState } from "react";
import { Pressable, ScrollView, StatusBar } from "react-native";
import { Checkbox } from "react-native-paper";
import { AppButton } from "../../components/AppButton";
import BackGround from "../../components/backGround";
import {
  ShortcutCard,
  ShortcutFavoriteCard,
} from "../../components/shortcutCard";

import { IThemeState } from "../../types/IThemeState";
import { useSelector, useDispatch } from "react-redux";
import { toDarkTheme, toLightTheme } from "../../store/modules/Theme.store";

//*Phosphor Icons - Figma Icons
import { UserGear, ChartPie, Question, Sun, Moon } from "phosphor-react-native";

import {
  BtnContainer,
  CheckLine,
  CheckText,
  FooterLogo,
  Shortcuts,
  Stacks,
  SubTitle,
  ThemeSwitch,
  TopImg,
  UserFav,
} from "./styles";

import {
  main_day,
  main_night,
  user_example,
  user_placeholder,
  logo_footer,
} from "../../constants/resources";

export type IStatusBar = {
  height: number;
};

export function Main() {
  const { currentTheme, selected } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const dispatch = useDispatch();

  //*Stacks
  const [RN, setRN] = useState(false);
  const [sql, setSql] = useState(false);
  const [java, setJava] = useState(false);
  const [JS, setJS] = useState(false);
  const [node, setNode] = useState(false);

  function setDarkTheme() {
    dispatch(toDarkTheme());
  }

  function setLightTheme() {
    dispatch(toLightTheme());
  }

  return (
    <BackGround>
      <TopImg
        height={StatusBar.currentHeight}
        source={currentTheme === "light" ? main_day : main_night}
        alt="BackGround image"
      />
      <ThemeSwitch>
        {currentTheme === "light" ? (
          <Pressable onPress={setDarkTheme}>
            <Moon color="#28393A" weight="regular" size={24} />
          </Pressable>
        ) : (
          <Pressable onPress={setLightTheme}>
            <Sun color="#28393A" weight="regular" size={24} />
          </Pressable>
        )}
      </ThemeSwitch>
      <Stacks>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={RN ? "checked" : "unchecked"}
            onPress={() => setRN(!RN)}
          />
          <CheckText>REACT NATIVE</CheckText>
        </CheckLine>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={sql ? "checked" : "unchecked"}
            onPress={() => setSql(!sql)}
          />
          <CheckText>SQL SERVER</CheckText>
        </CheckLine>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={java ? "checked" : "unchecked"}
            onPress={() => setJava(!java)}
          />
          <CheckText>JAVA</CheckText>
        </CheckLine>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={JS ? "checked" : "unchecked"}
            onPress={() => setJS(!JS)}
          />
          <CheckText>JAVASCRIPT</CheckText>
        </CheckLine>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={node ? "checked" : "unchecked"}
            onPress={() => setNode(!node)}
          />
          <CheckText>NODE</CheckText>
        </CheckLine>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={node ? "checked" : "unchecked"}
            onPress={() => setNode(!node)}
          />
          <CheckText>NODE</CheckText>
        </CheckLine>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={node ? "checked" : "unchecked"}
            onPress={() => setNode(!node)}
          />
          <CheckText>NODE</CheckText>
        </CheckLine>
        <CheckLine>
          <Checkbox
            color="#FFCA28"
            uncheckedColor="#fdfdfd"
            status={node ? "checked" : "unchecked"}
            onPress={() => setNode(!node)}
          />
          <CheckText>NODE</CheckText>
        </CheckLine>
      </Stacks>
      <BtnContainer>
        <AppButton title="BUSCAR" onPress={() => {}} />
      </BtnContainer>
      <ScrollView>
        <Shortcuts>
          <ShortcutCard
            title="Perfil"
            onPress={() => {}}
            icon={<UserGear color="#000" weight="light" size={60} />}
          />
          <ShortcutCard
            title="Avaliações"
            onPress={() => {}}
            icon={<ChartPie color="#000" weight="light" size={60} />}
          />
          <ShortcutCard
            title="FAQ"
            onPress={() => {}}
            icon={<Question color="#000" weight="light" size={60} />}
          />
        </Shortcuts>
        <SubTitle>Seus Favoritos</SubTitle>
        <Shortcuts>
          <ShortcutFavoriteCard
            onPress={() => {}}
            iconDev={<UserFav source={user_example} />}
          />
          <ShortcutFavoriteCard
            onPress={() => {}}
            iconDev={<UserFav source={user_placeholder} />}
          />
          <ShortcutFavoriteCard
            onPress={() => {}}
            iconDev={<UserFav source={user_placeholder} />}
          />
        </Shortcuts>
        <FooterLogo source={logo_footer} />
      </ScrollView>
    </BackGround>
  );
}
