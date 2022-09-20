import { useState, useEffect } from "react";
import { Pressable, ScrollView, StatusBar } from "react-native";
import { Checkbox } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { toDarkTheme, toLightTheme } from "../../store/modules/Theme.store";
import Api from "../../services/api";
import { AppButton } from "../../components/AppButton";
import BackGround from "../../components/backGround";
import Spinner from "../../components/spinner";
import OkModal from "../../components/okModal";
import { ICategory, IStack, IState, IDev, IProfile } from "../../types";
import { IThemeState } from "../../types/IThemeState";
import { getRandomNumber } from "../../utils";
import { ShortcutCard } from "../../components/shortcutCard";
import {
  Feather,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
} from "@expo/vector-icons";
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

const light_image = require("../../assets/images/light_main_bg.png");
const dark_image = require("../../assets/images/dark_main_bg.png");
const user_placeholder = require("../../assets/images/user_placeholder.png");
const user_example = require("../../assets/images/user_example.png");
const footer_logo = require("../../assets/images/footer_logo.png");

export type IStatusBar = {
  height: number;
};

export function Main(props) {
  const { currentTheme, selected } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const dispatch = useDispatch();

  //TODO: Alterar esses estados pelas Stacks(LINHA 70) (Dados da API)
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
        <AppButton title="BUSCAR" onPress={handlePressSearchDev} />
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
