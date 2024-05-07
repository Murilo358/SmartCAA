import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { colorModeContext, useMode } from "./styles/Themes";
import { Box, CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Topbar />
          </CssBaseline>
        </ThemeProvider>
      </colorModeContext.Provider>
    </>
  );
}

export default App;
