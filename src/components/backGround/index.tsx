import { LinearGradient } from "expo-linear-gradient";
import { IThemeState } from "../../types/IThemeState";
import { useSelector } from "react-redux";
import styles from "./styles";

export default function BackGround({ children }) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const colors =
    currentTheme === "light" ? ["#334637", "#161620"] : ["#161620"];

  return (
    <LinearGradient colors={colors} style={styles.container}>
      {children}
    </LinearGradient>
  );
}
