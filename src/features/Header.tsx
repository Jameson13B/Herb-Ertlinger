import { useMyState } from "../state"
import Logo from "../assets/Logo.svg"

import styles from "./header.module.css"

export const Header = () => {
  const { showGallery, showAbout, showShop, setPage } = useMyState()

  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <img src={Logo} alt="Golden Crow Logo" />
        <div>
          <h1 className={styles.title}>Golden Crow</h1>
          <h2 className={styles.subtitle}>Photography</h2>
        </div>
      </div>
      <div className={styles.headerButtons}>
        <button
          className={`${styles.headerButton} ${showGallery && styles.active}`}
          onClick={() => setPage("gallery")}
        >
          Gallery
        </button>
        <button
          className={`${styles.headerButton} ${showAbout && styles.active}`}
          onClick={() => setPage("about")}
        >
          About
        </button>
        <button
          className={`${styles.headerButton} ${showShop && styles.active}`}
          onClick={() => setPage("shop")}
        >
          Shop
        </button>
      </div>
    </div>
  )
}
