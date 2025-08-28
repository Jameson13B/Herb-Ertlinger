import platteauCrowIcon from "../assets/platteauCrowIcon.svg"
import InstaSmall from "../assets/instaSmall.svg"
import FacebookSmall from "../assets/facebookSmall.svg"
import EmailSmall from "../assets/emailSmall.svg"

import styles from "./footer.module.css"

export const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.socialContainer}>
            <div className={styles.socialTab}>
              <img src={InstaSmall} />
              <p>Instagram</p>
            </div>
            <div className={styles.socialTab}>
              <img src={FacebookSmall} />
              <p>Facebook</p>
            </div>
            <div className={styles.socialTab}>
              <img src={EmailSmall} />
              <p>Email</p>
            </div>
          </div>
          <img src={platteauCrowIcon} alt='Platteau and Crow Icon' />
        </div>
      </div>
    </>
  )
}
