import BioImage from "../assets/BioImage.jpg"
import InstaLarge from "../assets/instaLarge.svg"
import FacebookLarge from "../assets/facebookLarge.svg"
import EmailLarge from "../assets/emailLarge.svg"
import aboutBanner from "../assets/aboutBanner.jpg"
import AboutHeaderIcon from "../assets/AboutHeaderIcon.svg"
import aboutBanner2 from "../assets/aboutBanner2.jpg"
import { Banner } from "../features/Banner"
import { Button } from "../components"

import styles from "./about.module.css"

export const About = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Banner
        image={aboutBanner}
        name="Banner"
        tags={{ country: ["USA"], region: ["Utah"], site: ["Goblin Valley"] }}
      />

      <img src={AboutHeaderIcon} className={styles.aboutIcon} />

      <div className={styles.aboutContent}>
        <p>
          Virginia Gontika is a landscape photographer whose work is deeply
          rooted in a lifelong love for wild, ancient landscapes. Originally
          from Greece, she felt a powerful connection to the American Southwest,
          particularly the Colorado Plateau, and eventually made Utah her home.
          Now based in Salt Lake City with her beautiful family, Virginia draws
          daily inspiration from the rugged desert terrain that surrounds her.
        </p>
        <p>
          After picking up a camera in 2018, she immediately fell in love with
          photography. What began as a creative outlet soon evolved into a
          deeper calling: to document and protect the desert landscapes that had
          captured her heart. In 2024, she founded Golden Crown Photography and
          began pursuing landscape photography professionally.
        </p>
        <div className={styles.splitContent}>
          <img src={BioImage} className={styles.bioImage} />
          <div className={styles.splitTxt}>
            <p>
              Her work is more than aesthetic, it is a form of advocacy. Through
              her images, Virginia seeks to educate others on the fragility,
              dangers, and profound beauty of the Colorado Plateau. Each
              photograph tells a layered story of geological wonder, ecological
              sensitivity, and cultural richness. Her mission is to raise
              awareness of the environmental threats facing the region and to
              inspire deeper care for these irreplaceable lands.
            </p>
            <p>
              Virginia’s photography is grounded in reverence. She sees the
              camera as a bridge connecting viewers to the land and encouraging
              a sense of awe, respect, and responsibility. Her compositions
              highlight powerful skies, subtle textures, and sacred spaces that
              invite both wonder and reflection.
            </p>
            <p>
              Virginia shares the beauty and urgency of the Colorado Plateau
              with a growing audience, one print, one story, and one landscape
              at a time.
            </p>
            <Button variant="secondary">Shop Prints</Button>
          </div>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.socialTab}>
            <img src={InstaLarge} />
            <p>Instagram</p>
          </div>
          <div className={styles.socialTab}>
            <img src={FacebookLarge} />
            <p>Facebook</p>
          </div>
          <div className={styles.socialTab}>
            <img src={EmailLarge} />
            <p>Email</p>
          </div>
        </div>
      </div>
      <Banner
        image={aboutBanner2}
        name="Banner"
        tags={{ country: ["USA"], region: ["Utah"], site: ["Goblin Valley"] }}
      />
    </div>
  )
}
