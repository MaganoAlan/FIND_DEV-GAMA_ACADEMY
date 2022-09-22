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
import PickerModal from "../../components/pickerModal";
import {
  ShortcutCard,
  ShortcutFavoriteCard,
} from "../../components/shortcutCard";

import {
  BtnContainer,
  FooterLogo,
  Shortcuts,
  SubTitle,
  TopImg,
  UserFav,
  TouchableFilter,
  FilterText,
} from "./styles";

import {
  main_day,
  main_night,
  user_placeholder,
  logo_footer,
} from "../../constants/resources";

import { Auth } from "aws-amplify";
import { beUnlogged } from "../../store/modules/Auth.store";
import { useDispatch } from "react-redux";
import { IFavoritesState } from "../../types/IFavoritesState";
import LogOutBtn from "../../components/LogOutBtn";

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

  const [showPickerModal, setShowPickerModal] = useState(false);
  const [typeModalPicker, setTypeModalPicker] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<IOption[]>();
  const [options, setOptions] = useState<IOption[]>();
  const [pickerModalTitle, setPickerModalTitle] = useState("");

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
    try {
      const response = await Api.get(
        `devs${getStateFilter()}${getStackFilter()}${getCategoryFilter()}`
      );

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
    try {
      await Auth.signOut().then(() => {
        dispatch(beUnlogged());
      });
    } catch (error) {
      setShowModal(true);
      setModalType("error");
      setModalTitle("Falha ao realizar Sign out");
      setModalText(`(${error.name}) Detalhes: ${error.message}`);
    }
  }

  const randomNumber = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 20)
  );

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

  function handleOpenCategoryModal() {
    setTypeModalPicker("category");
    setOptions(getCategoryOptions());
    setPickerModalTitle("Selecione as categorias...");
    setShowPickerModal(true);
  }

  function handleOpenStackModal() {
    setTypeModalPicker("stack");
    setOptions(getStackOptions());
    setPickerModalTitle("Selecione as stacks...");
    setShowPickerModal(true);
  }

  function handleOpenStateModal() {
    setTypeModalPicker("state");
    setOptions(getStateOptions());
    setPickerModalTitle("Selecione os estados...");
    setShowPickerModal(true);
  }

  useEffect(() => {
    switch (typeModalPicker) {
      case "stack":
        setSelectedStacks(selectedOptions);
        break;
      case "category":
        setSelectedCategories(selectedOptions);
        break;
      case "state":
        setSelectedStates(selectedOptions);
        break;
    }
  }, [selectedOptions]);

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
      <TouchableFilter onPress={handleOpenCategoryModal}>
        <FilterText>
          {selectedCategories === undefined || selectedCategories?.length === 0
            ? "Selecione as categorias..."
            : `${selectedCategories
                ?.map((category) => category.value)
                .join(", ")}`}
        </FilterText>
      </TouchableFilter>
      <TouchableFilter onPress={handleOpenStackModal}>
        <FilterText>
          {selectedStacks === undefined || selectedStacks?.length === 0
            ? "Selecione as stacks..."
            : `${selectedStacks.map((stack) => stack.value).join(", ")}`}
        </FilterText>
      </TouchableFilter>
      <TouchableFilter onPress={handleOpenStateModal}>
        <FilterText>
          {selectedStates === undefined || selectedStates?.length === 0
            ? "Selecione os estados..."
            : `${selectedStates.map((state) => state.value).join(", ")}`}
        </FilterText>
      </TouchableFilter>
      <BtnContainer>
        <AppButton title="BUSCAR" onPress={handlePressSearchDev} />
      </BtnContainer>
      <ScrollView
        style={{ maxHeight: "80%" }}
        showsVerticalScrollIndicator={false}
      >
        <Shortcuts>
          <ShortcutCard
            title="Perfil"
            onPress={() => {
              props.navigation.navigate("profile");
            }}
            icon={<UserGear color="#000" weight="light" size={60} />}
          />
          <ShortcutCard
            title="Avaliações"
            onPress={() => {
              props.navigation.navigate("rating", {
                randomNumber: randomNumber,
                perksValue: Math.floor(Math.random() * 80) + 1,
              });
            }}
            icon={<ChartPie color="#000" weight="light" size={60} />}
          />
          <ShortcutCard
            title="FAQ"
            onPress={() => {
              props.navigation.navigate("faq");
            }}
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
        <PickerModal
          title={pickerModalTitle}
          options={options}
          showModal={showPickerModal}
          setShowModal={setShowPickerModal}
          setOptions={setSelectedOptions}
        />
        <OkModal
          type={modalType}
          title={modalTitle}
          text={modalText}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </ScrollView>
      <FooterLogo source={logo_footer} />
    </BackGround>
  );
}
