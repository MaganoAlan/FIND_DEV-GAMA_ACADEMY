import Router from "./src/routes";
import { StatusBar, Platform } from "react-native";
import main from "./src/style/theme/main";
import { ThemeProvider } from "styled-components";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import Store from "./src/store/";

export default function App() {
  return (
    <ReduxProvider store={Store}>
      <ThemeProvider theme={main}>
        <PaperProvider>
          {Platform.OS === "android" ? (
            <StatusBar backgroundColor="#ffffff00" translucent />
          ) : (
            <StatusBar backgroundColor="#ffffff00" hidden />
          )}

          <Router />
        </PaperProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
