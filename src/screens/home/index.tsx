import { useState, useEffect, useRef, HTMLInputTypeAttribute } from "react";
import { View, Image, Animated } from "react-native";
import { useSelector } from "react-redux";
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
  DevInfoText,
  InputContainer,
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
  const [name, setName] = useState("");

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

  return (
    <BackGround>
      <CityImage source={currentTheme === "light" ? city_day : city_night} />
      <SearchText>Search ...</SearchText>
      <InLineContainer>
        <InputContainer>
          <DefaultInput
            value={name}
            onChangeText={(e: HTMLInputTypeAttribute) => {
              setName(e);
            }}
          />
        </InputContainer>
        <InputContainer>
          <DefaultInput
            value={""}
            onChangeText={(e: HTMLInputTypeAttribute) => {}}
          />
        </InputContainer>
      </InLineContainer>
      <Animated.FlatList
        data={devs}
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
                width: "80%",
                paddingHorizontal: spacing,
                marginBottom: spacing,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: currentTheme == "light1" ? "#FFF" : "#FFCA28",
                alignItems: "center",
                justifyContent: "center",
                opacity,
                transform: [{ scale }],
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "20%", marginVertical: spacing / 2 }}>
                  <Image
                    source={{ uri: item.photo }}
                    style={{
                      width: avatarSize,
                      height: avatarSize,
                      borderRadius: avatarSize,
                      marginRight: spacing / 2,
                    }}
                  />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    width: "70%",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <DevInfoText>{item.name}</DevInfoText>
                  <DevInfoText>
                    {stacks.find((stack) => stack.id == item.stack).label}
                  </DevInfoText>
                </View>
                <View
                  style={{
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2,
                    backgroundColor: "#FFCA28",
                  }}
                ></View>
              </View>
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
