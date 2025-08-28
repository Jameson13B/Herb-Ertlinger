import styles from "./tagBar.module.css"
import CloseIcon from "../assets/close.svg"

export const TagBar = (props: { tags: string[] }) => {
  return (
    <div className={styles.bannerContent}>
      <div className={styles.bannerContentLeft}>
        <img src={CloseIcon} alt="Close" className={styles.closeIcon} />
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
