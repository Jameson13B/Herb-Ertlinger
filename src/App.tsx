import { useEffect } from "react"
import { Gallery } from "./pages/Gallery.tsx"
import { About } from "./pages/About.tsx"
import { Admin } from "./pages/Admin.tsx"
import { Cart } from "./pages/Cart.tsx"

import { Header, Footer } from "./features"
import { useMyState } from "./utils/state.ts"
import { useKomani } from "./hooks/useKomani.tsx"

function App() {
  const { showGallery, showAbout, showAdmin, showCart } = useMyState()
  useKomani()

  useEffect(() => window.scrollTo(0, 0), [showGallery, showAbout, showAdmin, showCart])

  return (
    <>
      <Header />

      {showGallery && <Gallery />}
      {showAbout && <About />}
      {showAdmin && <Admin />}
      {showCart && <Cart />}

      <Footer />
    </>
  )
}

export default App
