import styles from "./galleryCTA.module.css"
import Plateau from "../assets/Plateau.svg"
import Cacti from "../assets/Cacti.svg"
import Stars from "../assets/Stars.svg"
import WhiteInsta from "../assets/whiteInsta.svg"
import WhiteFacebook from "../assets/whiteFacebook.svg"
import WhiteEmail from "../assets/whiteEmail.svg"
import { Button } from "../components/Button"

export const GalleryCTA = () => {
  return (
    <div className={styles.galleryCta}>
      <div className={styles.ctaImage}>
        <div className={styles.ctaImageTop}>
          <img src={Stars} alt="Stars" />
          <p className={styles.ctaImageTopText}>welcome</p>
        </div>
        <p className={styles.ctaImageMiddle}>
          Take an adventure with me through desert landscapes. I'm a Utah based
          landscape photographer with a passion for desert landscapes and the
          study of the Colorado Plateau.
        </p>
        <div className={styles.ctaImageBottom}>
          <img src={Plateau} alt="Plateau" />
          <img src={Cacti} alt="Cacti" className={styles.ctaImageBottomCacti} />
        </div>
      </div>
      <div className={styles.ctaActions}>
        <div className={styles.ctaActionsItems}>
          {/* TODO: Update all links to correct social media links */}
          <a
            className={styles.ctaActionsItem}
            href="https://www.instagram.com/plateauserts/"
          >
            <img src={WhiteInsta} alt="Instagram" />
            <p>Instagram</p>
          </a>
          <a
            className={styles.ctaActionsItem}
            href="https://www.facebook.com/plateauserts/"
          >
            <img src={WhiteFacebook} alt="Facebook" />
            <p>Facebook</p>
          </a>
          <a
            className={styles.ctaActionsItem}
            href="mailto:plateauserts@gmail.com"
          >
            <img src={WhiteEmail} alt="Email" />
            <p>Email</p>
          </a>
        </div>
        <div>
          <Button variant="secondary">SHOP PRINTS</Button>
        </div>
      </div>
    </div>
  )
}
