import { useMyState } from "./utils/state.ts"

import { Gallery } from "./pages/Gallery.tsx"
import { About } from "./pages/About.tsx"
import { Admin } from "./pages/Admin.tsx"
import { Header } from "./features/Header.tsx"
import { Footer } from "./features/Footer.tsx"
import { useKomani } from "./hooks/useKomani.tsx"

function App() {
  const { showGallery, showAbout, showAdmin } = useMyState()
  useKomani()

  return (
    <>
      <Header />

      {showGallery && <Gallery />}
      {showAbout && <About />}
      {showAdmin && <Admin />}

      <Footer />
    </>
  )
}

export default App
