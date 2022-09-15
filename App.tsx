import Router from "./src/routes";
import { StatusBar } from "react-native";
import main from "./src/style/theme/main";
import { ThemeProvider } from "styled-components";
import { Provider as PaperProvider } from "react-native-paper";
//import { Amplify } from "aws-amplify";
//import awsconfig from "./src/aws-exports";
//Amplify.configure(awsconfig);

export default function App() {
  return (
    <ThemeProvider theme={main}>
      <PaperProvider>
        <StatusBar />
        <Router />
      </PaperProvider>
    </ThemeProvider>
  );
}
