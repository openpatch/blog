import { createMuiTheme, Theme } from "@material-ui/core/styles";

type Modify<T, R> = Omit<T, keyof R> & R;

export type CustomTheme = Modify<
  Theme,
  {
    palette: {
      link: string;
    };
  }
>;

export interface ThemeOptions {
  darkMode: boolean;
}

export const primary = "#006f95";
export const primaryLight = "#43B9E0";
export const primaryDark = "#004961";
export const secondary = "#98ff98";

export default function createMyTheme({ darkMode }: ThemeOptions): CustomTheme {
  const baseTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? primaryDark : primary,
      },
      secondary: {
        main: secondary,
      },
    },
  });
  return {
    ...baseTheme,
    palette: {
      ...baseTheme.palette,
      link: darkMode ? primaryLight : primary,
    },
  };
}
