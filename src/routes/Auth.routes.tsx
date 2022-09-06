import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";

export default function AuthRoutes() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"signIn"}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name={"signIn"} component={SignIn} />
        <Drawer.Screen name={"signUp"} component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
