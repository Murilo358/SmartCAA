import { darkPalette, lightPalette } from "./src/styles/Themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    variants: {
      extend: {},
    },
    colors: {
      dark: darkPalette,
      light: lightPalette,
    },
  },
  plugins: [],
};
