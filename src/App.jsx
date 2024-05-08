import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { colorModeContext, useMode } from "./styles/Themes";
import { Box, CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import Project from "./components/Project";
import { Route, Routes } from "react-router-dom";
import ReD from "./pages/ReD";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Topbar />
            <Routes>
              <Route path="/ReD" element={<ReD />} />
              <Route path="/" element={<Project />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </colorModeContext.Provider>
    </>
  );
}

export default App;
