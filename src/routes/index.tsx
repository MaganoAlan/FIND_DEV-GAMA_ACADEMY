import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";

export default function Router() {
  // TODO - após implementar lógica de login renderizar rotas de atuenticação ou do app
  const logged = false;
  return (
    <NavigationContainer>
      {logged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
