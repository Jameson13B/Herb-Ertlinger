import { create } from "zustand"

interface MyState {
  showGallery: boolean
  showAbout: boolean
  showShop: boolean
  showAdmin: boolean
  setPage: (page: "gallery" | "about" | "shop" | "admin") => void
}

export const useMyState = create<MyState>((set) => ({
  showGallery: false,
  showAbout: false,
  showShop: false,
  showAdmin: true,
  setShowGallery: (showGallery: boolean) => set({ showGallery }),
  setShowAbout: (showAbout: boolean) => set({ showAbout }),
  setShowShop: (showShop: boolean) => set({ showShop }),
  setShowAdmin: (showAdmin: boolean) => set({ showAdmin }),
  setPage: (page: "gallery" | "about" | "shop" | "admin") =>
    set(
      page === "gallery"
        ? {
            showGallery: true,
            showAbout: false,
            showShop: false,
            showAdmin: false,
          }
        : page === "about"
          ? {
              showGallery: false,
              showAbout: true,
              showShop: false,
              showAdmin: false,
            }
          : page === "admin"
            ? {
                showGallery: false,
                showAbout: false,
                showShop: false,
                showAdmin: true,
              }
            : {
                showGallery: false,
                showAbout: false,
                showShop: true,
                showAdmin: false,
              }
    ),
}))
