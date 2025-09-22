import CactusCrowIcon from "../../assets/cactusCrowIcon.svg"
import ArchIcon from "../../assets/archIcon.svg"
import styles from "./sectionHeader.module.css"

interface SectionHeaderProps {
  title: string
}

const Icon = {
  Gallery: ArchIcon,
  About: CactusCrowIcon,
  Admin: CactusCrowIcon,
}

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={styles.headerContainer}
      style={{
        marginBottom: props.title === "Admin" ? "32px" : "64px",
        marginTop: props.title === "Admin" ? "0" : "32px",
      }}
    >
      <img
        src={Icon[props.title as keyof typeof Icon]}
        className={styles.headerImg}
      />
      <h1 className={styles.headerTxt}>{props.title}</h1>
    </div>
  )
}
