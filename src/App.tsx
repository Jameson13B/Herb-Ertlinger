import { lightTheme } from "./theme.css.ts"
import { useMyState } from "./state"

import { Gallery } from "./views/Gallery.tsx"
import { About } from "./views/About.tsx"
import { Header } from "./views/Header.tsx"
import { useEffect } from "react"

function App() {
  const { step } = useMyState()

  useEffect(() => document.body.classList.add(lightTheme), [])

  return (
    <>
      <Header />

      {step === "gallery" && <Gallery />}
      {step === "about" && <About />}
    </>
  )
}

export default App
