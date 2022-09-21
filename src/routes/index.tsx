import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";

export default function Router() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((response) => {
      setLogged(response.attributes.email_verified);
      console.log(response.attributes.email_verified);
    });
  }, []);
  return <>{logged ? <AppRoutes /> : <AuthRoutes />}</>;
}
