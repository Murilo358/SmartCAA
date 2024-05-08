import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

export const darkPalette = {
  darkGreen: {
    100: "#6e917e",
    200: "#4f7d5f",
    300: "#3f6d4e",
    400: "#345f42",
    500: "#2b5239",
    600: "#23482f",
    700: "#1d3f28",
    800: "#173720",
    900: "#0f2813",
  },
  greenAccent: {
    100: "#7ca07c",
    200: "#639163",
    300: "#528352",
    400: "#457545",
    500: "#3b693b",
    600: "#325f32",
    700: "#2b582b",
    800: "#245024",
    900: "#183818",
  },
  beigeAccent: {
    100: "#ecefe9",
    200: "#d8e1d6",
    300: "#c5d3c3",
    400: "#b3c5b1",
    500: "#a2b7a0",
    600: "#92a992",
    700: "#849b84",
    800: "#769d76",
    900: "#689068",
  },
  whiteAccent: {
    100: "#ffffff",
    200: "#f9fafa",
    300: "#f3f4f3",
    400: "#eeefed",
    500: "#e9ebea",
    600: "#e3e5e4",
    700: "#dedfe0",
    800: "#d8dadc",
    900: "#d2d4d4",
  },
  primary: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
  },
  background: {
    100: "#38434f",
    200: "#222a31",
    300: "#192024",
    400: "#111518",
  },
};

export const lightPalette = {
  darkGreen: {
    100: "#88AB8E",
    200: "#749F82",
    300: "#608476",
    400: "#4C785A",
    500: "#386E4E",
    600: "#246342",
    700: "#105936",
    800: "#004F2A",
    900: "#003B1E",
  },
  greenAccent: {
    100: "#AFC8AD",
    200: "#A6C2A3",
    300: "#9CBD99",
    400: "#93B78F",
    500: "#89B185",
    600: "#80AB7B",
    700: "#76A571",
    800: "#6D9F67",
    900: "#639A5D",
  },
  beigeAccent: {
    100: "#EEE7DA",
    200: "#ECE2CF",
    300: "#EADCC5",
    400: "#E8D7BA",
    500: "#E6D1B0",
    600: "#E4CCA5",
    700: "#E2C79B",
    800: "#E0C191",
    900: "#DEC686",
  },
  whiteAccent: {
    100: "#F2F1EB",
    200: "#F1F0E6",
    300: "#EFEFDE",
    400: "#EEEECE",
    500: "#EDEEC6",
    600: "#ECEEBF",
    700: "#EBEEB7",
    800: "#EAEDB0",
    900: "#E9EDA8",
  },
  primary: {
    100: "#141414",
    200: "#292929",
    300: "#3d3d3d",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
  },
  background: {
    100: "#ffffff",
    200: "#f9f9f9",
    300: "#F6F5F2",
    400: "#dedede",
    500: "#b1d6a5",
  },
};

export const tokens = (mode) => ({
  ...(mode === "dark" ? darkPalette : lightPalette),
});

//Mui themes settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            //Light theme
            primary: {
              main: colors.greenAccent[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.whiteAccent[700],
              main: colors.whiteAccent[500],
              light: colors.whiteAccent[100],
            },
            background: {
              default: colors.background[300],
            },
          }
        : {
            //Light theme
            primary: {
              main: colors.whiteAccent[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.darkGreen[700],
              main: colors.darkGreen[500],
              light: colors.darkGreen[100],
            },
            background: {
              default: colors.background[300],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    ptBR,
  };
};

//Context for colorMode

export const colorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode), ptBR), [mode]);

  return [theme, colorMode];
};
