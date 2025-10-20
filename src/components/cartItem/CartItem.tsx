import styles from "./CartItem.module.css"
import { Button } from "../button/Button"
import aboutBanner from "../../assets/aboutBanner.png"
import trash from "../../assets/trash.svg"

// used: item.name
export const CartItem = (props) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.namePicture}>
        <h2 className={styles.itemName}>{props.item.name}</h2>
        <img
          src={aboutBanner}
          alt='About Banner'
          style={{
            height: "160px",
            alignSelf: "stretch",
            aspectRatio: "3/2",
          }}
        />
      </div>
      <div className={styles.variants}>
        <div className={styles.variant}>
          <p>Size</p>
          <div className={styles.variantValue}>24x36</div>
        </div>
        <div className={styles.variant}>
          <p>Material</p>
          <div className={styles.variantValue}>Canvas</div>
        </div>
        <div className={styles.variant}>
          <p>Price</p>
          <div className={styles.variantValue}>$100.00</div>
        </div>
        <div className={styles.buttonContainer}>
          <Button variant='secondary'>Edit</Button>
          <img src={trash} alt='Trash Icon' />
        </div>
      </div>
    </div>
  )
}
