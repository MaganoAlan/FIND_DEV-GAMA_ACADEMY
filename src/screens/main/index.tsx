import { useState } from "react";
import { Pressable, ScrollView, StatusBar, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import { AppButton } from "../../components/AppButton";
import BackGround from "../../components/backGround";
import Button from "../../components/button";
import { ShortcutCard } from "../../components/shortcutCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
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
import { IThemeState } from "../../types/IThemeState";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toDarkTheme, toLightTheme } from "../../store/modules/Theme.store";

const light_image = require("../../assets/images/light_main_bg.png");
const dark_image = require("../../assets/images/dark_main_bg.png");

const user_placeholder = require("../../assets/images/user_placeholder.png");
const user_example = require("../../assets/images/user_example.png");

const footer_logo = require("../../assets/images/footer_logo.png");

export type IStatusBar = {
  height: number;
};

export function Main() {
  const { currentTheme, selected } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const dispatch = useDispatch();

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
        source={currentTheme === "light" ? light_image : dark_image}
        alt="BackGround image"
      />
      <ThemeSwitch>
        {currentTheme === "light" ? (
          <Pressable onPress={setDarkTheme}>
            <FontAwesome5 name="moon" size={24} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={setLightTheme}>
            <Feather name="sun" size={24} color="black" />
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
            icon={
              <FontAwesome5 name="user-astronaut" size={48} color="black" />
            }
          />
          <ShortcutCard
            title="Avaliações"
            onPress={() => {}}
            icon={<Foundation name="graph-pie" size={48} color="black" />}
          />
          <ShortcutCard
            title="FAQ"
            onPress={() => {}}
            icon={
              <MaterialCommunityIcons
                name="comment-question"
                size={48}
                color="black"
              />
            }
          />
        </Shortcuts>
        <SubTitle>Seus Favoritos</SubTitle>
        <Shortcuts>
          <ShortcutCard
            onPress={() => {}}
            icon={<UserFav source={user_example} />}
          />
          <ShortcutCard
            onPress={() => {}}
            icon={<UserFav source={user_placeholder} />}
          />
          <ShortcutCard
            onPress={() => {}}
            icon={<UserFav source={user_placeholder} />}
          />
        </Shortcuts>
        <FooterLogo source={footer_logo} />
      </ScrollView>
    </BackGround>
  );
}
