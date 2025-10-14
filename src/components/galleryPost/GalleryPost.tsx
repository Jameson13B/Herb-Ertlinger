import { TagBar } from "../tagBar/TagBar"
import { useImageOrientation } from "../../hooks/useImageOrientation"
import styles from "./galleryPost.module.css"

interface GalleryPostProps {
  fileName: string
  id: string
  tags: { country: string[]; region: string[]; site: string[] }
}

export const GalleryPost = (props: GalleryPostProps) => {
  const orientation = useImageOrientation(props.fileName)

  const getContainerClass = () => {
    switch (orientation) {
      case "portrait":
        return `${styles.galleryPost} ${styles.portrait}`
      case "landscape":
        return `${styles.galleryPost} ${styles.landscape}`
      default:
        return styles.galleryPost
    }
  }

  return (
    <div className={getContainerClass()}>
      <img
        className={styles.galleryPostImage}
        src={props.fileName}
        alt={props.id}
      />
      <TagBar
        fileName={props.fileName}
        id={props.id}
        sx={{ padding: "0" }}
        tags={props.tags}
      />
    </div>
  )
}
