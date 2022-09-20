import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import { useSelector } from "react-redux";
import { IThemeState } from "../types/IThemeState";
import verifyAccount from "../screens/verifyAccount";

export default function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  const { selected } = useSelector((state: IThemeState) => state.themeState);
  return (
    <NavigationContainer>
      <ThemeProvider theme={selected}>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name={"signIn"} component={SignIn} />
          <Screen name={"signUp"} component={SignUp} />
        </Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
