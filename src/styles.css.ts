import { globalStyle } from "@vanilla-extract/css"
// import tokens from "./theme.css.ts"

// Reset and base styles
globalStyle("*", {
  boxSizing: "border-box",
})
globalStyle("body", {
  margin: 0,
  display: "flex",
  placeItems: "center",
  minWidth: "320px",
  minHeight: "100vh",
})
globalStyle("#root", {
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "320px",
  minHeight: "100vh",
})
