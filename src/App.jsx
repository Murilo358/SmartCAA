import { ThemeProvider, useTheme } from "@emotion/react";
import "./App.css";
import { colorModeContext, tokens, useMode } from "./styles/Themes";
import { Box, CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import Project from "./components/Project";
import { Route, Routes } from "react-router-dom";
import ReD from "./pages/ReD";

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Topbar />
            <Box
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: 15,
                  color: `${colors.primary[100]} !important`,
                },
                "& .MuiInputLabel-shrink": {
                  fontSize: 20,
                  fontWeight: "bold",
                  color: `${colors.primary[100]} !important`,
                  marginBottom: "100 !important",
                },

                "& .label.Mui-focused": {
                  color: colors.darkGreen[300],
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: colors.darkGreen[300],
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: colors.darkGreen[300],
                  },
                  "&:hover fieldset": {
                    borderColor: colors.darkGreen[300],
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: colors.darkGreen[300],
                  },
                },
              }}
            >
              <Routes>
                <Route path="/ReD" element={<ReD />} />
                <Route path="/" element={<Project />} />
              </Routes>
            </Box>
          </CssBaseline>
        </ThemeProvider>
      </colorModeContext.Provider>
    </>
  );
}
// Mui-focused
export default App;
