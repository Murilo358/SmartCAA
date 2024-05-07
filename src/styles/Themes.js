import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

export const darkPalette = {
  darkGreen: {
    100: "#4B8673",
    200: "#447F6B",
    300: "#3D7763",
    400: "#36705B",
    500: "#2F6954",
    600: "#28514C",
    700: "#204A44",
    800: "#19433D",
    900: "#123B35",
  },
  greenAccent: {
    100: "#5FD068",
    200: "#57CA5F",
    300: "#50C257",
    400: "#49B84F",
    500: "#42AF47",
    600: "#3BA63E",
    700: "#339E36",
    800: "#2C952E",
    900: "#258C26",
  },
  beigeAccent: {
    100: "#F5DF99",
    200: "#EBD98F",
    300: "#E2D584",
    400: "#D9CF79",
    500: "#CFCA6F",
    600: "#C6C565",
    700: "#BDBF5A",
    800: "#B4BA50",
    900: "#ABB445",
  },
  whiteAccent: {
    100: "#F6FBF4",
    200: "#EDF6EB",
    300: "#E4F3E1",
    400: "#DBF0D8",
    500: "#D1EDCF",
    600: "#C8EAC6",
    700: "#BFE7BC",
    800: "#B6E4B3",
    900: "#ACE0AA",
  },
};

export const lightPalette = {
  darkGreen: {
    100: "#4B8673",
    200: "#417C69",
    300: "#37725F",
    400: "#2D6855",
    500: "#235E4B",
    600: "#195441",
    700: "#0F4A37",
    800: "#05402D",
    900: "#003723",
  },
  greenAccent: {
    100: "#5FD068",
    200: "#54BD5D",
    300: "#4AB553",
    400: "#40A848",
    500: "#379F3E",
    600: "#2D9533",
    700: "#238B29",
    800: "#19821E",
    900: "#107814",
  },
  beigeAccent: {
    100: "#F5DF99",
    200: "#E8D985",
    300: "#DBC870",
    400: "#CEBE5C",
    500: "#C1B548",
    600: "#B4AA34",
    700: "#A79F20",
    800: "#9A940C",
    900: "#8D8900",
  },
  whiteAccent: {
    100: "#F6FBF4",
    200: "#E9F6E4",
    300: "#DBF2D3",
    400: "#CDF0C3",
    500: "#BFF0B3",
    600: "#B1EEA2",
    700: "#A2EC92",
    800: "#94EA81",
    900: "#86E872",
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
              default: colors.darkGreen[200],
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
              default: colors.whiteAccent[200],
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
