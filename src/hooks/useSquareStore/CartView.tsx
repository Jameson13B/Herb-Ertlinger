import type { Square } from "square"
import type { Product } from "./useSquareStore"

export const CartView = (props: {
  cart: Product[]
  calculateTotal: () => Promise<Square.Order | undefined>
  checkout: () => Promise<void>
  removeFromCart: (product: Product) => void
}) => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Cart</h1>
      <button onClick={props.checkout}>Checkout</button>
    </div>
  )
}
