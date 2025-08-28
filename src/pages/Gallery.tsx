import { Banner } from "../features/Banner"
import { GalleryCTA } from "../features/GalleryCTA"
import CactusCrowIcon from "../assets/cactusCrowIcon.svg"

import styles from "./about.module.css" // Temporary until below todo is completed

export const Gallery = () => {
  return (
    <div>
      <Banner
        image="https://placehold.co/1450x420"
        name="Banner"
        tags={["USA", "Utah", "Goblin Valley"]}
      />

      <GalleryCTA />

      {/* TODO: Make component and use with About page */}
      <div className={styles.headerContainer} style={{ marginBottom: "64px" }}>
        <img src={CactusCrowIcon} className={styles.headerImg} />
        <h1 className={styles.headerTxt}>Gallery</h1>
      </div>

      {/* TODO: Make Gallery here */}
    </div>
  )
}
