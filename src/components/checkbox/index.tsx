import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { IOption } from "../../types";
import { OptionContainer, Touchable, Label } from "./styles";

interface ICheckboxProps {
  options: IOption[];
  onChange: (values: IOption[]) => void;
}

export default function Checkbox({ options, onChange }: ICheckboxProps) {
  const [selected, setSelected] = useState<IOption[]>([]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  function toggle(option: IOption) {
    let index = selected.findIndex((iterator) => iterator.id === option.id);
    let tempSelected = [...selected];

    if (index !== -1) tempSelected.splice(index, 1);
    else tempSelected.push(option);

    setSelected(tempSelected);
  }

  return (
    <>
      {options?.map((option, index) => (
        <OptionContainer key={index}>
          <Touchable key={index} onPress={() => toggle(option)}>
            {selected.findIndex((iterator) => iterator.id === option.id) !==
            -1 ? (
              <MaterialIcons name="check" color={"#FFF"} size={20} />
            ) : (
              <></>
            )}
          </Touchable>
          <Label>{option.value.toLocaleUpperCase()}</Label>
        </OptionContainer>
      ))}
    </>
  );
}
