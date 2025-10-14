import { useEffect, useState } from "react"

import { Banner } from "../features/Banner"
import galleryBanner from "../assets/galleryBanner.jpg"
import galleryHeaderIcon from "../assets/galleryHeaderIcon.svg"
import { GalleryCTA } from "../features/GalleryCTA"

import { GalleryPost } from "../components"

import { getAssets, getConfig } from "../utils/firebase"
import styles from "./gallery.module.css"
import { Filter } from "../features/Filter"

export interface Asset {
  id: string
  createdAt: string
  fileName: string
  tags: { country: string[]; region: string[]; site: string[] }
}

interface Config {
  tags: { country: string[]; region: string[]; site: string[] }
}

export const Gallery = () => {
  const [assets, setAssets] = useState<Asset[]>([])
  const [filterState, setFilterState] = useState<{
    country: { tag: string; active: boolean }[]
    region: { tag: string; active: boolean }[]
    site: { tag: string; active: boolean }[]
  }>({ country: [], region: [], site: [] })
  useEffect(() => {
    const pullAssets = async () => {
      const pulledAssets = await getAssets()

      setAssets(pulledAssets as Asset[])
    }
    const fetchConfig = async () => {
      const configData = (await getConfig()) as Config

      setFilterState({
        country: formatTags(configData?.tags.country ?? []),
        region: formatTags(configData?.tags.region ?? []),
        site: formatTags(configData?.tags.site ?? []),
      })
    }

    fetchConfig()
    pullAssets()
  }, [])

  return (
    <div style={{ paddingTop: "100px" }}>
      <Banner
        image={galleryBanner}
        name="Banner"
        tags={{ country: ["USA"], region: ["Utah"], site: ["Goblin Valley"] }}
      />

      <GalleryCTA />

      <img
        src={galleryHeaderIcon}
        alt="Gallery Header Icon"
        className={styles.headerIcon}
      />

      <div className={styles.galleryContainer}>
        <Filter filterState={filterState} setFilterState={setFilterState} />

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

const formatTags = (tags: string[]) =>
  tags.map((tag) => ({
    tag,
    active: false,
  }))
