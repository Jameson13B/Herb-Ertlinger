import { useEffect, useState } from "react"

import { Banner } from "../features/Banner"
import { GalleryCTA } from "../features/GalleryCTA"

import { GalleryPost } from "../components/GalleryPost"
import { SectionHeader } from "../components/SectionHeader"

import { getAssets } from "../utils/firebase"
import styles from "./gallery.module.css"

interface Asset {
  id: string
  createdAt: string
  fileName: string
  tags: string[]
}

export const Gallery = () => {
  const [assets, setAssets] = useState<Asset[]>([])

  useEffect(() => {
    const pullAssets = async () => {
      const pulledAssets = await getAssets()

      setAssets(pulledAssets as Asset[])
    }
    pullAssets()
  }, [])

  return (
    <div>
      <Banner
        image="https://placehold.co/1450x420"
        name="Banner"
        tags={["USA", "Utah", "Goblin Valley"]}
      />

      <GalleryCTA />

      <SectionHeader title="Gallery" />

      <div className={styles.galleryContainer}>
        <div className={styles.galleryFiltersSideBar}>
          <h2>View by location</h2>
          <h3>Country:</h3>
        </div>

        <div className={styles.galleryPostsContainer}>
          {assets.length > 0 ? (
            assets.map((asset) => <GalleryPost key={asset.id} {...asset} />)
          ) : (
            <div style={{ padding: "24px", color: "white" }}>Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}
