import { Button, Modal, Text, View } from "react-native";
import { Container, Title, Content, BackModal, ModalBtn } from "./styles";

export interface IOkModalProps {
  title: string;
  text: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  icon?: any;
}

export default function OkModal({
  icon,
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
      transparent={true}
    >
      <BackModal onPress={handleCloseModal}>
        <Container>
          <View>{icon}</View>
          <Title>{title}</Title>
          <Content>{text}</Content>
          <View style={{ width: "30%" }}>
            <ModalBtn onPress={handleCloseModal}>
              <Text style={{ textAlign: "center" }}>OK</Text>
            </ModalBtn>
          </View>
        </Container>
      </BackModal>
    </Modal>
  );
}
