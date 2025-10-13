import { useState } from "react"

import { useMyState } from "../utils/state"
import Logo from "../assets/Logo.svg"
import Menu from "../assets/Menu.svg"
import Close from "../assets/Close.svg"
import styles from "./header.module.css"
import CactusIcon from "../assets/CactusIcon.svg"
import InstaIcon from "../assets/instaSmall.svg"
import FacebookIcon from "../assets/facebookSmall.svg"
import EmailIcon from "../assets/emailSmall.svg"

export const Header = () => {
  const { showGallery, showAbout, showCart, setPage } = useMyState()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileNav = (page: "gallery" | "about" | "cart") => {
    setPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerBar}>
        <div className={styles.titleContainer}>
          <img src={Logo} alt='Golden Crow Logo' />
          <div>
            <h1 className={styles.title}>Golden Crow</h1>
            <h2 className={styles.subtitle}>Photography</h2>
          </div>
        </div>
        <div className={styles.headerButtons}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <img src={Close} alt='Close' />
            ) : (
              <img src={Menu} alt='Menu' />
            )}
          </button>

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
            className={`${styles.headerButton} ${showCart && styles.active}`}
            onClick={() => setPage("cart")}
          >
            Cart
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuButtons}>
            <button
              className={`${styles.mobileMenuButton} ${showGallery && styles.active}`}
              onClick={() => handleMobileNav("gallery")}
            >
              Gallery
            </button>
            <button
              className={`${styles.mobileMenuButton} ${showAbout && styles.active}`}
              onClick={() => handleMobileNav("about")}
            >
              About
            </button>
            <button
              className={`${styles.mobileMenuButton} ${showCart && styles.active}`}
              onClick={() => handleMobileNav("cart")}
            >
              Cart
            </button>
          </div>
          <div className={styles.mobileMenuSocials}>
            <div className={styles.mobileMenuSocialsItems}>
              <div className={styles.mobileMenuSocialsItem}>
                <img src={InstaIcon} />
                <p className={styles.mobileMenuSocialsItemText}>Instagram</p>
              </div>
              <div className={styles.mobileMenuSocialsItem}>
                <img src={FacebookIcon} />
                <p className={styles.mobileMenuSocialsItemText}>Facebook</p>
              </div>
              <div className={styles.mobileMenuSocialsItem}>
                <img src={EmailIcon} />
                <p className={styles.mobileMenuSocialsItemText}>Email</p>
              </div>
            </div>
            <img src={CactusIcon} />
          </div>
        </div>
      )}
    </div>
  )
}
