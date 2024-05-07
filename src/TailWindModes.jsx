import { useTheme } from "@emotion/react";
import { darkPalette, lightPalette } from "./styles/Themes";

const TailWindModes = () => {
  const theme = useTheme();

  const colorMode = theme.palette.mode === "dark" ? darkPalette : lightPalette;

  return colorMode;
};

export default TailWindModes;
