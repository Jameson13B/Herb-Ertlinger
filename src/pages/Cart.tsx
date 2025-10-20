import styles from "./Cart.module.css"
import cartHeaderIcon from "../assets/cartHeaderIcon.svg"
import { CartItem } from "../components/cartItem/CartItem"
import { Button } from "../components/button/Button"

const dumbData = [
  { catalog_object_id: "1", name: "Product 1", price: 10.0, quantity: "2" },
  { catalog_object_id: "2", name: "Product 2", price: 15.5, quantity: "1" },
  { catalog_object_id: "3", name: "Product 3", price: 7.25, quantity: "3" },
]

export const Cart = () => {
  return (
    <>
      <div className={styles.cartContainer}>
        <img src={cartHeaderIcon} alt='Cart Header Icon' />
        {dumbData.map((item) => {
          return <CartItem item={item} />
        })}
        <div className={styles.subTotal}>
          <p>Subtotal:</p>
          <p>$100.00</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button variant='secondary'>Continue Shopping</Button>
          <Button variant='primary'>Checkout</Button>
        </div>
      </div>
    </>
  )
}
