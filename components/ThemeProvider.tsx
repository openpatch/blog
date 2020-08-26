import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import useDarkMode from "use-dark-mode";
import createMuiTheme from "theme";
import { dark } from "@material-ui/core/styles/createPalette";

interface ThemeProviderProps {
  children: any;
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const darkMode = useDarkMode(false);
  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        darkMode: darkMode.value,
      })}
      {...props}
      children={children}
    />
  );
};

export default ThemeProvider;
