import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: {
        600: string;
      };
      background: string;
      text: string;
      green: {
        700: string;
        600: string;
        100: string;
      };
      gray: {
        900: string;
        500: string;
        200: string;
      };
      danger: {
        700: string;
        600: string;
        100: string;
      };
    };

    fonts: {
      titles: string;
      body: string;
    };
  }
}
