import { useState } from "react"
import { VariantModal } from "./VariantModal"
import { SquareClient, Square } from "square"

const client = new SquareClient({
  token: import.meta.env.VITE_SQUARE_ACCESS_TOKEN,
})

type UseSquareStoreReturnType = {
  calculateTotal: () => Promise<Square.Order | undefined>
  checkout: () => void
  removeFromCart: (product: Product) => void
  cart: Product[]
  VariantModal: React.ReactNode
}

export type Product = {
  catalog_object_id: string
  modifiers?: [
    {
      catalog_object_id: string
      quantity: string
    },
  ]
  variation_name?: string
  quantity: string
}

export const useSquareStore = (): UseSquareStoreReturnType => {
  const [cart, setCart] = useState<Product[]>([])
  const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID

  // Cart Management
  const addToCart = (product: Product) => setCart([...cart, product])
  const removeFromCart = (product: Product) =>
    setCart(
      cart.filter((p) => p.catalog_object_id !== product.catalog_object_id)
    )
  // Precaculate Cart
  const calculateTotal = async () => {
    const response = await client.orders.calculate({
      order: {
        locationId,
        lineItems: cart,
      },
    })

    return response.order
  }
  // Checkout Cart
  const checkout = async () => {
    await client.checkout.paymentLinks.create({
      idempotencyKey: crypto.randomUUID().toString(),
      order: {
        locationId,
        lineItems: cart,
      },
    })
  }

  return {
    calculateTotal,
    checkout,
    removeFromCart,
    cart,
    VariantModal: (
      <VariantModal addToCart={addToCart} removeFromCart={removeFromCart} />
    ),
  }
}
