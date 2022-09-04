import { Modal } from "react-native";

import Button from "../button";
import { Container, Title, Content } from "./styles";

export interface IOkModalProps {
  title: string;
  text: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function OkModal({
  showModal,
  title,
  text,
  setShowModal,
}: IOkModalProps) {
  function handleCloseModal() {
    setShowModal(!showModal);
  }

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={handleCloseModal}
    >
      <Container>
        <Title>{title}</Title>
        <Content>{text}</Content>
        <Button title="OK" onPress={handleCloseModal} />
      </Container>
    </Modal>
  );
}
