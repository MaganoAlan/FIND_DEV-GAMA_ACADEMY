import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileList from "../screens/profileList";
import Profile from "../screens/profile";
import { Main } from "../screens/main";
import { useSelector } from "react-redux";
import { IThemeState } from "../types/IThemeState";
import { ThemeProvider } from "styled-components";
import Rating from "../screens/rating";

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  const { selected } = useSelector((state: IThemeState) => state.themeState);
  return (
    <NavigationContainer>
      <ThemeProvider theme={selected}>
        <Navigator
          initialRouteName={"main"}
          screenOptions={{ headerShown: false }}
        >
          <Screen name={"main"} component={Main} />
          <Screen name={"profileList"} component={ProfileList} />
          <Screen name={"profile"} component={Profile} />
          <Screen name={"rating"} component={Rating} />
        </Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
