import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./screens/home";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";

import routeName from "./constants/routeName";

export default function Router() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={routeName.home} component={Home} />
        <Drawer.Screen name={routeName.signIn} component={SignIn} />
        <Drawer.Screen name={routeName.signUp} component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
