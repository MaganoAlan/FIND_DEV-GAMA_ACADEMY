import Router from "./src/routes";
import main from "./src/style/theme/main";
import { Amplify } from "aws-amplify";

import awsconfig from "./src/aws-exports";
import { ThemeProvider } from "styled-components";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <ThemeProvider theme={main}>
      <Router />;
    </ThemeProvider>
  );
}
