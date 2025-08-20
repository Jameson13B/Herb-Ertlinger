import { create } from "zustand"

interface MyState {
  showGallery: boolean
  showAbout: boolean
  showShop: boolean
  setPage: (page: "gallery" | "about" | "shop") => void
}

export const useMyState = create<MyState>((set) => ({
  showGallery: true,
  showAbout: false,
  showShop: false,
  setShowGallery: (showGallery: boolean) => set({ showGallery }),
  setShowAbout: (showAbout: boolean) => set({ showAbout }),
  setShowShop: (showShop: boolean) => set({ showShop }),
  setPage: (page: "gallery" | "about" | "shop") =>
    set(
      page === "gallery"
        ? { showGallery: true, showAbout: false, showShop: false }
        : page === "about"
          ? { showGallery: false, showAbout: true, showShop: false }
          : { showGallery: false, showAbout: false, showShop: true }
    ),
}))
