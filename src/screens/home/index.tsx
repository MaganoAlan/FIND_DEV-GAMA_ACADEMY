import { useState, useEffect, HTMLInputTypeAttribute } from "react";
import { useSelector } from "react-redux";
import Api from "../../services/api";
import { ICategory, IStack, IState, IDev } from "../../types";
import { IThemeState } from "../../types/IThemeState";
import Spinner from "../../components/spinner";
import OkModal from "../../components/okModal";
import { DefaultInput } from "../../components/Input";
import Footer from "../../components/footer";
import {
  Container,
  CityImage,
  InLineContainer,
  SearchText,
  InputContainer,
} from "./styles";

const city_day = require("../../assets/images/city-day.png");
const city_night = require("../../assets/images/city-night.png");

export default function Home({ navigation }) {
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
    <Container>
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
      <Footer />
      {loading && <Spinner />}
      <OkModal
        type="error"
        title="Falha ao recuperar dados"
        text={error}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Container>
  );
}
