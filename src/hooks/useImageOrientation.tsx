import { useState, useEffect } from "react"

export type ImageOrientation = "portrait" | "landscape" | "loading"

export const useImageOrientation = (src: string): ImageOrientation => {
  const [orientation, setOrientation] = useState<ImageOrientation>("loading")

  useEffect(() => {
    if (!src) return

    const img = new Image()

    img.onload = () => {
      const isPortrait = img.naturalHeight > img.naturalWidth
      setOrientation(isPortrait ? "portrait" : "landscape")
    }

    img.onerror = () => {
      // Default to landscape if image fails to load
      setOrientation("landscape")
    }

    img.src = src
  }, [src])

  return orientation
}
