import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ProfileList from "../screens/profileList";
import Profile from "../screens/profile";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        //TODO: Alterar tela inicial para HOME
        initialRouteName={"profileList"}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name={"profileList"} component={ProfileList} />
        <Drawer.Screen name={"profile"} component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
