import styles from "./tagBar.module.css"
import geoIcon from "../assets/geoIcon.svg"

export const TagBar = (props: { tags: string[] }) => {
  return (
    <div className={styles.bannerContent}>
      <div className={styles.bannerContentLeft}>
        <img src={geoIcon} alt="Close" className={styles.geoIcon} />
        {props.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <button className={styles.shopButton}>Shop</button>
    </div>
  )
}
