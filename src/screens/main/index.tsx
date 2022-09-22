import { useState, useEffect } from "react";
import { ScrollView, StatusBar } from "react-native";
import { UserGear, ChartPie, Question } from "phosphor-react-native";
import { useSelector } from "react-redux";
import Api from "../../services/api";
import { IThemeState } from "../../types/IThemeState";
import {
  ICategory,
  IStack,
  IState,
  IDev,
  IProfile,
  IOption,
} from "../../types";
import { getRandomNumber } from "../../utils";
import AppButton from "../../components/AppButton";
import ThemeSwitch from "../../components/themeSwitch";
import BackGround from "../../components/backGround";
import Spinner from "../../components/spinner";
import OkModal from "../../components/okModal";
import Checkbox from "../../components/checkbox";
import {
  ShortcutCard,
  ShortcutFavoriteCard,
} from "../../components/shortcutCard";

import {
  BtnContainer,
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
  user_placeholder,
  logo_footer,
} from "../../constants/resources";

import { Auth } from "aws-amplify";
import Button from "../../components/button";
import { beUnlogged } from "../../store/modules/Auth.store";
import { useDispatch } from "react-redux";
import { IFavoritesState } from "../../types/IFavoritesState";
import { LogOutBtn } from "../../components/LogOutBtn";

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
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [modalType, setModalType] = useState("");
  const [categories, setCategories] = useState<ICategory[]>();
  const [selectedCategories, setSelectedCategories] = useState<IOption[]>();
  const [stacks, setStacks] = useState<IStack[]>();
  const [selectedStacks, setSelectedStacks] = useState<IOption[]>();
  const [states, setStates] = useState<IState[]>();
  const [selectedStates, setSelectedStates] = useState<IOption[]>();

  const getCategories = () => Api.get("category");
  const getStacks = () => Api.get("stacks");
  const getStates = () => Api.get("state");

  useEffect(() => {
    setLoading(true);
    Promise.all([getCategories(), getStacks(), getStates()])
      .then((response) => {
        setCategories(response[0].data);
        setStacks(response[1].data);
        setStates(response[2].data);
      })
      .catch((error) => {
        setShowModal(true);
        setModalType("error");
        setModalTitle("Falha ao recuperar dados");
        setModalText(`(${error.name}) Detalhes: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getStateFilter = (): string => {
    if (!selectedStates) return "";
    const stateIds = selectedStates?.map((state) => state.id);
    let filter: string = "?";
    stateIds?.forEach((id) => (filter += `state=${id}&`));
    return filter.slice(0, -1);
  };

  const getStackFilter = (): string => {
    if (!selectedStacks) return "";
    const stackIds = selectedStacks.map((stack) => stack.id);
    let filter: string = "?";
    stackIds?.forEach((id) => (filter += `stack=${id}&`));
    return filter.slice(0, -1);
  };

  const getCategoryFilter = (): string => {
    if (!selectedCategories) return "";
    const stackIds = selectedCategories.map((category) => category.id);
    let filter: string = "?";
    stackIds?.forEach((id) => (filter += `category=${id}&`));
    return filter.slice(0, -1);
  };

  async function getDev() {
    const endpoint = `devs${getStateFilter()}${getStackFilter()}${getCategoryFilter()}`;
    console.log(endpoint);
    try {
      const response = await Api.get(endpoint);

      return response.data;
    } catch (error) {
      setShowModal(true);
      setModalType("error");
      setModalTitle("Falha ao recuperar dados");
      setModalText(`(${error.name}) Detalhes: ${error.message}`);
    }
  }

  async function handlePressSearchDev() {
    let profiles: IProfile[] = [];
    const result = await getDev();

    if (result.length === 0) {
      setShowModal(true);
      setModalType("warning");
      setModalTitle("Aviso");
      setModalText("Não existem devs para esse filtro.");
      return;
    }

    for (let i = 0; i < result?.length; i++) {
      profiles.push(getProfile(result[i]));
    }

    props.navigation.navigate("profileList", { profiles: profiles });
  }

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
      email: `${name.toLocaleLowerCase()}.${surname.toLocaleLowerCase()}@gmail.com`,
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

  async function signOut() {
    console.log("entrou");
    try {
      await Auth.signOut().then(() => {
        dispatch(beUnlogged());
        console.log("saiu");
      });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  const getCategoryOptions = (): IOption[] => {
    let options: IOption[] = [];

    categories?.forEach((category) =>
      options.push({
        id: category.id,
        value: category.name,
      })
    );
    return options;
  };

  const getStackOptions = (): IOption[] => {
    let options: IOption[] = [];

    stacks?.forEach((stack) =>
      options.push({
        id: stack.id,
        value: stack.label,
      })
    );
    return options;
  };

  const getStateOptions = (): IOption[] => {
    let options: IOption[] = [];

    states?.forEach((state) =>
      options.push({
        id: state.id,
        value: state.value,
      })
    );
    return options;
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
      <LogOutBtn onPress={() => signOut()} />
      <ThemeSwitch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stacks>
          <Checkbox
            options={getStateOptions()}
            onChange={(selected) => {
              setSelectedStates(selected);
            }}
          />
        </Stacks>
        {/* <Stacks>
        <Checkbox
          options={getStackOptions()}
          onChange={(selected) => {
            setSelectedStacks(selected);
          }}
        />
      </Stacks> */}
        {/* <Stacks>
          <Checkbox
            options={getCategoryOptions()}
            onChange={(selected) => {
              setSelectedCategories(selected);
            }}
          />
        </Stacks> */}
        <BtnContainer>
          <AppButton title="BUSCAR" onPress={handlePressSearchDev} />
        </BtnContainer>
        <Shortcuts>
          <ShortcutCard
            title="Perfil"
            onPress={() => {}}
            icon={<UserGear color="#000" weight="light" size={60} />}
          />
          <ShortcutCard
            title="Avaliações"
            onPress={() => {
              props.navigation.navigate("rating");
            }}
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
                onPress={() =>
                  props.navigation.navigate("profile", { profile: fav })
                }
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
        type={modalType}
        title={modalTitle}
        text={modalText}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </BackGround>
  );
}
