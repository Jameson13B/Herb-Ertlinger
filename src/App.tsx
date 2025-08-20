import { useMyState } from "./state"
import "./app.css"

import { Gallery } from "./pages/Gallery.tsx"
import { About } from "./pages/About.tsx"
import { Header } from "./features/Header.tsx"

function App() {
  const { showGallery, showAbout } = useMyState()

  return (
    <>
      <Header />

      {showGallery && <Gallery />}
      {showAbout && <About />}
    </>
  )
}

export default App
