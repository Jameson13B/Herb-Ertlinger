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
  palette1: "",
  palette2: "",
  palette3: "",
  palette4: "",
  palette5: "",
})
export const vars = createGlobalTheme("*", {
  color: {
    primary: "blue",
    secondary: "red",
  },
})
export const lightTheme = createTheme(colors, {
  background: "#fff",
  text: "#000",
  palette1: "#9b5de5",
  palette2: "#f15bb5",
  palette3: "#fee440",
  palette4: "#00bbf9",
  palette5: "#00f5d4",
})
export const darkTheme = createTheme(colors, {
  background: "#121212",
  text: "#e0e0e0",
  palette1: "#9b5de5",
  palette2: "#f15bb5",
  palette3: "#fee440",
  palette4: "#00bbf9",
  palette5: "#00f5d4",
})

export default { ...root, colors }
