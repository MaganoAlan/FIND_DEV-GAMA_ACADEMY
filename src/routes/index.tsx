import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";

export default function Router() {
  // TODO - após implementar lógica de login renderizar rotas de autenticação ou do app
  const logged = false;
  return <>{logged ? <AppRoutes /> : <AuthRoutes />}</>;
}
