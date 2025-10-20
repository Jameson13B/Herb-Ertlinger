import styles from "./tagBar.module.css"
import geoIcon from "../../assets/geoIcon.svg"

export const TagBar = (props: {
  id: string
  sx?: React.CSSProperties
  tags: { country: string[]; region: string[]; site: string[] }
}) => {
  const handleShopClick = (id: string) => {
    alert(`Open shop for ${id}`)
  }

  return (
    <div
      className={styles.bannerContent}
      style={{ padding: "0 16px", ...props.sx }}
    >
      <div className={styles.bannerContentLeft}>
        <img src={geoIcon} alt='Close' className={styles.geoIcon} />
        {[
          ...(props.tags?.country ?? []),
          ...(props.tags?.region ?? []),
          ...(props.tags?.site ?? []),
        ].map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <button
        className={styles.shopButton}
        onClick={() => handleShopClick(props.id)}
      >
        Buy
      </button>
    </div>
  )
}
