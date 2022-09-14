import Router from "./src/routes";
import main from "./src/style/theme/main";
import { ThemeProvider } from "styled-components";
//import { Amplify } from "aws-amplify";
//import awsconfig from "./src/aws-exports";
//Amplify.configure(awsconfig);

export default function App() {
  return (
    <ThemeProvider theme={main}>
      <Router />
    </ThemeProvider>
  );
}
