import styles from "./banner.module.css"
import { TagBar } from "../components"

export const Banner = (props: {
  image: string
  name: string
  tags: { country: string[]; region: string[]; site: string[] }
  id: string
}) => {
  return (
    <div className={styles.banner}>
      <img className={styles.bannerImage} src={props.image} alt={props.name} />
      <TagBar id={props.id} tags={props.tags} />
    </div>
  )
}
