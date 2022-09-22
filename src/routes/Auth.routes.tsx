import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import { useSelector } from "react-redux";
import { IThemeState } from "../types/IThemeState";
import VerifyAccount from "../screens/verifyAccount";
import ForgotPassword from "../screens/forgotPassword";

export default function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  const { selected } = useSelector((state: IThemeState) => state.themeState);
  return (
    <NavigationContainer>
      <ThemeProvider theme={selected}>
        <Navigator
          initialRouteName={"signIn"}
          screenOptions={{ headerShown: false }}
        >
          <Screen name={"signIn"} component={SignIn} />
          <Screen name={"signUp"} component={SignUp} />
          <Screen name={"verifyAccount"} component={VerifyAccount} />
          <Screen name={"forgotPassword"} component={ForgotPassword} />
        </Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
