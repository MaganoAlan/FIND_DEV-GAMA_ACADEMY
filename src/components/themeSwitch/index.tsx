import { Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "phosphor-react-native";
import { toDarkTheme, toLightTheme } from "../../store/modules/Theme.store";
import { IThemeState } from "../../types/IThemeState";
import { Container } from "./styles";

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );
  function setDarkTheme() {
    dispatch(toDarkTheme());
  }

  function setLightTheme() {
    dispatch(toLightTheme());
  }

  return (
    <Container>
      {currentTheme === "light" ? (
        <Pressable onPress={setDarkTheme}>
          <Moon color="#28393A" weight="regular" size={24} />
        </Pressable>
      ) : (
        <Pressable onPress={setLightTheme}>
          <Sun color="#28393A" weight="regular" size={24} />
        </Pressable>
      )}
    </Container>
  );
}
