import { useEffect, useState } from "react"

import { Banner } from "../features/Banner"
import { GalleryCTA } from "../features/GalleryCTA"

import { GalleryPost } from "../components/GalleryPost"
import { SectionHeader } from "../components/SectionHeader"

import { getAssets, getConfig } from "../utils/firebase"
import styles from "./gallery.module.css"
import { Filter } from "../features/Filter"

export interface Asset {
  id: string
  createdAt: string
  fileName: string
  tags: string[]
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
      const configData = await getConfig()

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
        image="https://placehold.co/1450x420"
        name="Banner"
        tags={["USA", "Utah", "Goblin Valley"]}
      />

      <GalleryCTA />

      <SectionHeader title="Gallery" />

      {/* <div className={styles.galleryContainer}>
        <Filter filterState={filterState} setFilterState={setFilterState} />

        <div className={styles.galleryPostsContainer}>
          {assets.length > 0 ? (
            assets.map((asset) => <GalleryPost key={asset.id} {...asset} />)
          ) : (
            <div style={{ padding: "24px", color: "white" }}>Loading...</div>
          )}
        </div>
      </div> */}
    </div>
  )
}

const formatTags = (tags: string[]) =>
  tags.map((tag) => ({
    tag,
    active: false,
  }))
