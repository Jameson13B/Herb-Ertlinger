import {
  createTheme,
  createGlobalTheme,
  createThemeContract,
} from "@vanilla-extract/css"

const root = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
})

const colors = createThemeContract({
  background: "",
  text: "",
  burst: "",
  yellow: "",
  stone: "",
  sunset: "",
  dark: "",
})
export const lightTheme = createTheme(colors, {
  background: "#fff",
  text: "#000",
  burst: "#9b5de5",
  yellow: "#E6AB07",
  stone: "#A8A293",
  sunset: "linear-gradient(180deg, #843B03 0%, #E6AB07 84.5%)",
  dark: "#0B1215",
})

export default { ...root, colors }
