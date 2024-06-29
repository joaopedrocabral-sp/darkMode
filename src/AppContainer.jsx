import React from "react";
import { ThemeProvider } from "styled-components";
import { toggleMode } from "./hooks/darkMode";
import { darkTheme, lightTheme } from "./styles/theme";
import MyGlobalStyles from "./styles/globalStyles";
import Header from "./components/header";
import Home from "./pages/home";

function AppContainer() {

  const [theme, themeToggler] = toggleMode();
  const themeMode = theme == "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>

        <MyGlobalStyles />
        <Header theme={theme} themeToggler={themeToggler}/>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default AppContainer;
