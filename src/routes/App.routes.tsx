import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/home";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"home"}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name={"home"} component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
