import { useMyState } from "./state"

import { Gallery } from "./pages/Gallery.tsx"
import { About } from "./pages/About.tsx"
import { Header } from "./features/Header.tsx"
import { Footer } from "./features/Footer.tsx"

function App() {
  const { showGallery, showAbout } = useMyState()

  return (
    <>
      <Header />

      {showGallery && <Gallery />}
      {showAbout && <About />}

      <Footer />
    </>
  )
}

export default App
