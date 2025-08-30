import CactusCrowIcon from "../assets/cactusCrowIcon.svg"
import ArchIcon from "../assets/archIcon.svg"
import styles from "./sectionHeader.module.css"

interface SectionHeaderProps {
  title: string
}

const Icon = {
  Gallery: ArchIcon,
  About: CactusCrowIcon,
}

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className={styles.headerContainer} style={{ marginBottom: "64px" }}>
      <img
        src={Icon[props.title as keyof typeof Icon]}
        className={styles.headerImg}
      />
      <h1 className={styles.headerTxt}>{props.title}</h1>
    </div>
  )
}
