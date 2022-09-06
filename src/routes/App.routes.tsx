import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/home";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={"home"}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name={"home"} component={Home} />
    </Drawer.Navigator>
  );
}
