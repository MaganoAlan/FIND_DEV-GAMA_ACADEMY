import { useState } from "react";

import Button from "../../components/button";
import Header from "../../components/header";
import OkModal from "../../components/okModal";

import { Container } from "./styles";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  function handlePressButton() {
    setShowModal(true);
  }

  return (
    <Container>
      <Header title="Home Screen" />
      <Button title="Open modal" onPress={handlePressButton} />
      {
        <OkModal
          title="Modal title"
          text="Some text...."
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }
    </Container>
  );
}
