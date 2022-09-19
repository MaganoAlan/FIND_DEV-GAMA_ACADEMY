import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ThemeProvider } from "styled-components";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import { useSelector } from "react-redux";
import { IThemeState } from "../types/IThemeState";

export default function AuthRoutes() {
  const Drawer = createDrawerNavigator();
  const { currentTheme, selected } = useSelector(
    (state: IThemeState) => state.themeState
  );
  return (
    <NavigationContainer>
      <ThemeProvider theme={selected}>
        <Drawer.Navigator
          initialRouteName={"signIn"}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name={"signIn"} component={SignIn} />
          <Drawer.Screen name={"signUp"} component={SignUp} />
        </Drawer.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
