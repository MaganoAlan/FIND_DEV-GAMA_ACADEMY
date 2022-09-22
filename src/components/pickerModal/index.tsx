import { useState } from "react";
import { Modal } from "react-native";
import Checkbox from "../checkbox";
import { IOption } from "../../types";

import {
  Container,
  TitleContainer,
  Title,
  BackModal,
  StyledPressable,
  TitleButton,
  ButtonContainer,
} from "./styles";

interface IPickerModalProps {
  title: string;
  options: IOption[];
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setOptions: (values: IOption[]) => void;
}

export default function PickerModal({
  title,
  options,
  showModal,
  setShowModal,
  setOptions: setSelected,
}: IPickerModalProps) {
  const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);

  function handleCloseModal() {
    setSelected(selectedOptions);
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
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <Checkbox options={options} onChange={setSelectedOptions} />
          <ButtonContainer>
            <StyledPressable onPress={handleCloseModal}>
              <TitleButton>Fechar</TitleButton>
            </StyledPressable>
          </ButtonContainer>
        </Container>
      </BackModal>
    </Modal>
  );
}
