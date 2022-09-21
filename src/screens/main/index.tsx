import { useState, useEffect } from "react";
import { ScrollView, StatusBar } from "react-native";
import { Checkbox } from "react-native-paper";
import { UserGear, ChartPie, Question } from "phosphor-react-native";
import { useSelector } from "react-redux";
import Api from "../../services/api";
import { IThemeState } from "../../types/IThemeState";
import { ICategory, IStack, IState, IDev, IProfile } from "../../types";
import { getRandomNumber } from "../../utils";
import AppButton from "../../components/AppButton";
import ThemeSwitch from "../../components/themeSwitch";
import BackGround from "../../components/backGround";
import Spinner from "../../components/spinner";
import OkModal from "../../components/okModal";
import {
  ShortcutCard,
  ShortcutFavoriteCard,
} from "../../components/shortcutCard";

import {
  BtnContainer,
  CheckLine,
  CheckText,
  FooterLogo,
  Shortcuts,
  Stacks,
  SubTitle,
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
import { Auth } from "aws-amplify";
import Button from "../../components/button";
import { beUnlogged } from "../../store/modules/Auth.store";
import { useDispatch } from "react-redux";
import { IFavoritesState } from "../../types/IFavoritesState";

export type IStatusBar = {
  height: number;
};

export function Main(props) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );
  const { favorites } = useSelector(
    (state: IFavoritesState) => state.favoritesState
  );

  console.log(favorites);

  const dispatch = useDispatch();

  const [RN, setRN] = useState(false);
  const [sql, setSql] = useState(false);
  const [java, setJava] = useState(false);
  const [JS, setJS] = useState(false);
  const [node, setNode] = useState(false);

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
    const splitedName = dev.name.split(" ");

    const name = splitedName[0];
    const surname = splitedName[splitedName.length - 1];

    const getRandomExperience = (): string => {
      let experience = getRandomNumber(1, 20);
      if (experience === 1) return "Experience: 1 yr";
      return `Experience: ${experience >= 5 ? "5 yrs +" : `${experience} yrs`}`;
    };

    return {
      id: dev.id,
      fullName: dev.name,
      name: name,
      surname: surname,
      email: `${name.toLocaleLowerCase()}.${surname.toLocaleLowerCase()}${getRandomNumber(
        1,
        200
      )}@gmail.com`,
      age: getRandomNumber(18, 50),
      photo: dev.photo,
      description: dev.description,
      linkedinUrl: "https://www.linkedin.com/",
      gitHubUrl: "https://github.com/",
      experience: getRandomExperience(),
      category: categories.find((category) => category.id === dev.category),
      stack: stacks.find((stack) => stack.id === dev.stack),
      state: states.find((state) => state.id === dev.state),
      stars: getRandomNumber(1, 5),
    } as IProfile;
  };
  //TODO arrumar melhor
  async function signOut() {
    try {
      await Auth.signOut().then(() => {
        dispatch(beUnlogged()); // lógica do redux
        console.log("saiu");
      });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

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
      <ThemeSwitch />
      <Button title="Logout" onPress={signOut} />
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
          {favorites.length > 0 ? (
            favorites.map((fav: any, index) => (
              <ShortcutFavoriteCard
                key={index}
                onPress={() => {}}
                iconDev={<UserFav source={{ uri: fav.payload.photo }} />}
              />
            ))
          ) : (
            <>
              <ShortcutFavoriteCard
                onPress={() => {}}
                iconDev={<UserFav source={user_placeholder} />}
              />
              <ShortcutFavoriteCard
                onPress={() => {}}
                iconDev={<UserFav source={user_placeholder} />}
              />
              <ShortcutFavoriteCard
                onPress={() => {}}
                iconDev={<UserFav source={user_placeholder} />}
              />
            </>
          )}
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
