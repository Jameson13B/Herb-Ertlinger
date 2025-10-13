import { create } from "zustand"

interface MyState {
  showGallery: boolean
  showAbout: boolean
  showAdmin: boolean
  showCart: boolean
  setPage: (page: "gallery" | "about" | "admin" | "cart") => void
}

export const useMyState = create<MyState>((set) => ({
  showGallery: true,
  showAbout: false,
  showAdmin: false,
  showCart: false,
  setShowGallery: (showGallery: boolean) => set({ showGallery }),
  setShowAbout: (showAbout: boolean) => set({ showAbout }),
  setShowCart: (showCart: boolean) => set({ showCart }),
  setShowAdmin: (showAdmin: boolean) => set({ showAdmin }),
  setPage: (page: "gallery" | "about" | "admin" | "cart") =>
    set(
      page === "gallery"
        ? {
            showGallery: true,
            showAbout: false,
            showCart: false,
            showAdmin: false,
          }
        : page === "about"
          ? {
              showGallery: false,
              showAbout: true,
              showCart: false,
              showAdmin: false,
            }
          : page === "admin"
            ? {
                showGallery: false,
                showAbout: false,
                showCart: false,
                showAdmin: true,
              }
            : {
                showGallery: false,
                showAbout: false,
                showCart: true,
                showAdmin: false,
              }
    ),
}))
