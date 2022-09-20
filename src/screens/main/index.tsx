import { useState, useEffect } from "react";
import { Pressable, ScrollView, StatusBar } from "react-native";
import { Checkbox } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { toDarkTheme, toLightTheme } from "../../store/modules/Theme.store";
import Api from "../../services/api";
import { IThemeState } from "../../types/IThemeState";
import { ICategory, IStack, IState, IDev, IProfile } from "../../types";
import { getRandomNumber } from "../../utils";
import { AppButton } from "../../components/AppButton";
import BackGround from "../../components/backGround";
import Spinner from "../../components/spinner";
import OkModal from "../../components/okModal";
import {
  ShortcutCard,
  ShortcutFavoriteCard,
} from "../../components/shortcutCard";

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

export function Main(props) {
  const { currentTheme, selected } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const dispatch = useDispatch();

  //TODO: Alterar esses estados pelas Stacks(LINHA 70) (Dados da API)
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

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<ICategory[]>();
  const [stacks, setStacks] = useState<IStack[]>();
  const [states, setStates] = useState<IState[]>();
  const [devs, setDevs] = useState<IDev[]>();

  const getCategories = () => Api.get("category");
  const getStacks = () => Api.get("stacks");
  const getStates = () => Api.get("state");
  const getDevs = () => Api.get("devs");

  //TODO: Remover consulta da API endpoint Devs ao inicializar tela
  useEffect(() => {
    setLoading(true);
    Promise.all([getCategories(), getStacks(), getStates(), getDevs()])
      .then((response) => {
        setCategories(response[0].data);
        setStacks(response[1].data);
        setStates(response[2].data);
        setDevs(response[3].data);
      })
      .catch((error) => {
        setShowModal(true);
        setError(`(${error.name}) Detalhes: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handlePressSearchDev = () => {
    let profiles: IProfile[] = [];

    //TODO: Fazer consulta na API (Endpoint: devs) com filtros preenchidos na tela !
    for (let i = 0; i < devs.length; i++) {
      profiles.push(getProfile(devs[i]));
    }
    props.navigation.navigate("profileList", { profiles: profiles });
  };

  const getProfile = (dev: IDev): IProfile => {
    return {
      id: dev.id,
      name: dev.name,
      photo: dev.photo,
      description: dev.description,
      category: categories.find((category) => category.id === dev.category),
      stack: stacks.find((stack) => stack.id === dev.stack),
      state: states.find((state) => state.id === dev.state),
      stars: getRandomNumber(1, 5),
    } as IProfile;
  };

  return loading ? (
    <BackGround>
      <Spinner />
    </BackGround>
  ) : (
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
        <AppButton title="BUSCAR" onPress={handlePressSearchDev} />
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
      <OkModal
        type="error"
        title="Falha ao recuperar dados"
        text={error}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </BackGround>
  );
}
