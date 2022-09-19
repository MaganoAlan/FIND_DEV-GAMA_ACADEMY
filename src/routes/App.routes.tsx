import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ProfileList from "../screens/profileList";
import Profile from "../screens/profile";
import { Main } from "../screens/main";
import { useSelector } from "react-redux";
import { IThemeState } from "../types/IThemeState";
import { ThemeProvider } from "styled-components";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();
  const { currentTheme, selected } = useSelector(
    (state: IThemeState) => state.themeState
  );
  return (
    <NavigationContainer>
      <ThemeProvider theme={selected}>
        <Drawer.Navigator
          initialRouteName={"main"}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name={"main"} component={Main} />
          <Drawer.Screen name={"profileList"} component={ProfileList} />
          <Drawer.Screen name={"profile"} component={Profile} />
        </Drawer.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
