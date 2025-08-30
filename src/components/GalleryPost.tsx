import { TagBar } from "./TagBar"
import styles from "./galleryPost.module.css"

interface GalleryPostProps {
  fileName: string
  id: string
  tags: string[]
}

export const GalleryPost = (props: GalleryPostProps) => {
  return (
    <div className={styles.galleryPost}>
      <img
        className={styles.galleryPostImage}
        src={props.fileName}
        alt={props.id}
      />
      <TagBar id={props.id} sx={{ padding: "0" }} tags={props.tags} />
    </div>
  )
}
