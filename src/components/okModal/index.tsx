import { Modal, Text, View } from "react-native";
import {
  Container,
  TitleContainer,
  Title,
  Content,
  BackModal,
  ModalBtn,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { IThemeState } from "../../types/IThemeState";
import { useSelector } from "react-redux";

export interface IOkModalProps {
  type?: string;
  title: string;
  text: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export type ModalTheme = {
  currentTheme: string;
};

export default function OkModal({
  type = "success",
  showModal,
  title,
  text,
  setShowModal,
}: IOkModalProps) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  function handleCloseModal() {
    setShowModal(!showModal);
  }

  function getIcon() {
    switch (type) {
      case "error":
        return <MaterialIcons name="error" size={24} color="#FFCA28" />;
      case "warning":
        return <MaterialIcons name="warning" size={24} color="#FFCA28" />;
      case "none":
        return <></>;
      default:
        return <MaterialIcons name="done" size={24} color="#FFCA28" />;
    }
  }

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={handleCloseModal}
      transparent={true}
    >
      <BackModal onPress={handleCloseModal}>
        <Container currentTheme={currentTheme}>
          <TitleContainer>
            {getIcon()}
            <Title>{title}</Title>
          </TitleContainer>
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
