import styles from "./banner.module.css"
import { TagBar } from "../components/TagBar"

export const Banner = (props: {
  image: string
  name: string
  tags: string[]
}) => {
  return (
    <div className={styles.banner}>
      <img className={styles.bannerImage} src={props.image} alt={props.name} />
      <TagBar tags={props.tags} />
    </div>
  )
}
