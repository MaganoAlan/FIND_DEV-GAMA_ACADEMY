import { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import Api from "../../services/api";
import { ICategory, IStack, IState, IDev, IProfile } from "../../types";
import { IThemeState } from "../../types/IThemeState";
import BackGround from "../../components/backGround";
import Spinner from "../../components/spinner";
import OkModal from "../../components/okModal";
import Footer from "../../components/footer";
import {
  CardPressable,
  DevInfoContainer,
  DevInfoText,
  StarContainer,
  TechContainer,
  AvatarContainer,
  AvatarImage,
} from "./styles";

export default function ProfileList({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  //Todo: Mover lógica de buscas de dados (API) para tela anterior e enviar dados profiles: IProfile[] por props
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

  const getProfile = (dev: IDev): IProfile => {
    return {
      id: dev.id,
      name: dev.name,
      photo: dev.photo,
      description: dev.description,
      category: categories.find((category) => category.id === dev.category),
      stack: stacks.find((stack) => stack.id === dev.stack),
      state: states.find((state) => state.id === dev.state),
      stars: 4, //TODO: Regra para preenchimento das estrelas
    } as IProfile;
  };

  return loading ? (
    <BackGround>
      <Spinner />
    </BackGround>
  ) : (
    <BackGround>
      <Animated.FlatList
        data={devs}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={{
          marginTop: 30,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, 130 * index, 130 * (index + 2)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <CardPressable
              onPress={() => {
                navigation.navigate("profile", {
                  profile: getProfile(item),
                });
              }}
            >
              <Animated.View
                style={{
                  width: "85%",
                  flexDirection: "row",
                  marginBottom: 27,
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
                    {/*TODO: Validar como será o preenchimento das estrelas (Regra)*/}
                    <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                    <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                    <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                    <MaterialIcons name="star" size={24} color={"#FFCA28"} />
                    <MaterialIcons name="star" size={24} color={"#FFF"} />
                  </StarContainer>
                </DevInfoContainer>
                <TechContainer>
                  {/*TODO: Validar será o preenchimento da tecnologia (Regra)*/}
                  <MaterialIcons name={"smartphone"} size={35} />
                </TechContainer>
              </Animated.View>
            </CardPressable>
          );
        }}
      />
      {/*TODO: Ajustar fontes do componente footer*/}
      <Footer />
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
