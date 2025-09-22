import adminHeaderIcon from "../assets/adminHeaderIcon.svg"
import { AdminPhotos, AdminTags } from "../features"
import styles from "./admin.module.css"

export const Admin = () => {
  return (
    <div className={styles.adminContainer}>
      <img src={adminHeaderIcon} alt="Admin Header Icon" />

      <AdminPhotos />

      <AdminTags />
    </div>
  )
}
