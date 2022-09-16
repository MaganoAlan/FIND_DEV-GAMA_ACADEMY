import { useState, useEffect } from "react";
import Api from "../../services/api";
import { ICategory, IStack, IState, IDev } from "../../types";

import Spninner from "../../components/spinner";
import OkModal from "../../components/okModal";

import { Container, Title } from "./styles";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<ICategory[]>();
  const [stacks, setStacks] = useState<IStack[]>();
  const [states, setStates] = useState<IState[]>();
  const [devs, setDevs] = useState<IDev[]>();

  function getCategories() {
    return Api.get("category");
  }

  function getStacks() {
    return Api.get("stacks");
  }

  function getStates() {
    return Api.get("state");
  }

  function getDevs() {
    return Api.get("devs");
  }

  useEffect(() => {
    setLoading(true);
    Promise.all([
      getCategories(),
      getStacks(),
      getStacks(),
      getStates(),
      getDevs(),
    ])
      .then((response) => {
        setCategories(response[0].data);
        setStacks(response[1].data);
        setStates(response[2].data);
        setDevs(response[3].data);
      })
      .catch((error) => {
        setShowModal(true);
        setError(
          `(${error.name}) Detalhes: ${error.message}`
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Title>Home</Title>
      {loading && <Spninner />}
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
