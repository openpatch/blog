import React from "react";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import useDarkMode from "use-dark-mode";

export const defaultPrimary = "#006f95";
export const defaultSecondary = "#98ff98";

interface ThemeProviderProps {
  darkMode?: boolean;
  primary?: string;
  secondary?: string;
  children: any;
}

const ThemeProvider = ({
  primary = defaultPrimary,
  secondary = defaultSecondary,
  children,
  ...props
}: ThemeProviderProps) => {
  const darkMode = useDarkMode(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode.value ? "dark" : "light",
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
  });
  return <MuiThemeProvider theme={theme} {...props} children={children} />;
};

export default ThemeProvider;
