import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { useSelector } from "react-redux";
import { IAuthSate } from "../types/IAuthSate";

export default function Router() {
  const { logged, userEmail } = useSelector(
    (state: IAuthSate) => state.authState
  );

  return <>{true ? <AppRoutes /> : <AuthRoutes />}</>;
}
