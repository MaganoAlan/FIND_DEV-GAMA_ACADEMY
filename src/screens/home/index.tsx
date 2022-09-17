import { useState, useEffect, useRef, HTMLInputTypeAttribute } from "react";
import { View, Animated } from "react-native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import Api from "../../services/api";
import { ICategory, IStack, IState, IDev } from "../../types";
import { IThemeState } from "../../types/IThemeState";
import BackGround from "../../components/backGround";
import Spinner from "../../components/spinner";
import OkModal from "../../components/okModal";
import { DefaultInput } from "../../components/Input";
import Footer from "../../components/footer";
import {
  CityImage,
  InLineContainer,
  SearchText,
  DevInfoContainer,
  DevInfoText,
  InputContainer,
  StarContainer,
  TechContainer,
  AvatarContainer,
  AvatarImage,
} from "./styles";

const city_day = require("../../assets/images/city-day.png");
const city_night = require("../../assets/images/city-night.png");

const spacing = 20;
const avatarSize = 70;
const itemSize = avatarSize + spacing * 3;

export default function Home({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<ICategory[]>();
  const [stacks, setStacks] = useState<IStack[]>();
  const [states, setStates] = useState<IState[]>();
  const [devs, setDevs] = useState<IDev[]>();
  const [devNameFilter, setDevNameFilter] = useState("");
  const [stackFilter, setStackFilter] = useState("");

  const getCategories = () => Api.get("category");
  const getStacks = () => Api.get("stacks");
  const getStates = () => Api.get("state");
  const getDevs = () => Api.get("devs");

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

  const filteredDev =
    devNameFilter?.length > 0
      ? devs.filter((dev) => dev.name.includes(devNameFilter))
      : devs;

  return (
    <BackGround>
      <CityImage source={currentTheme === "light" ? city_day : city_night} />
      <SearchText>Search ...</SearchText>
      <InLineContainer>
        <InputContainer>
          <DefaultInput
            value={devNameFilter}
            onChangeText={(value: HTMLInputTypeAttribute) => {
              setDevNameFilter(value);
            }}
          />
        </InputContainer>
        <InputContainer>
          {/* TODO Usar combobox */}
          <DefaultInput
            value={stackFilter}
            onChangeText={(value: HTMLInputTypeAttribute) => {
              setStackFilter(value);
            }}
          />
        </InputContainer>
      </InLineContainer>
      <Animated.FlatList
        data={filteredDev}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={{
          marginTop: 70,
          alignItems: "center",
        }}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, itemSize * index, itemSize * (index + 2)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                width: "85%",
                flexDirection: "row",
                marginBottom: spacing,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: currentTheme == "light" ? "#FFF" : "#FFCA28",
                alignItems: "center",
                justifyContent: "space-between",
                opacity,
                transform: [{ scale }],
              }}
            >
              <AvatarContainer>
                <AvatarImage source={{ uri: item.photo }} />
              </AvatarContainer>
              <DevInfoContainer>
                <DevInfoText>{item.name}</DevInfoText>
                <DevInfoText>
                  {stacks.find((stack) => stack.id === item.stack).label}
                </DevInfoText>
                <StarContainer>
                  <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                  <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                  <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                  <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                  <MaterialIcons name="star" size={24} color={"#FFF"} />
                </StarContainer>
              </DevInfoContainer>
              <TechContainer>
                <MaterialIcons name={"smartphone"} size={35} />
              </TechContainer>
            </Animated.View>
          );
        }}
      />
      <Footer />

      {loading && <Spinner />}
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
