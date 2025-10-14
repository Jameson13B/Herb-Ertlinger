import { useState } from "react"
import { Square } from "square"

import { VariantDrawer } from "./VariantDrawer"
import { CartView } from "./CartView"
import { client, locationId } from "../../utils/square"

type UseSquareStoreReturnType = {
  BuyButton: (fileName: string) => React.ReactNode
  CartView: React.ReactNode
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

  // Cart Management
  const addToCart = (product: Product) => setCart((cart) => [...cart, product])
  const removeFromCart = (product: Product) =>
    setCart((cart) =>
      cart.filter((p) => p.catalog_object_id !== product.catalog_object_id)
    )
  // Precaculate Cart
  const calculateTotal = async (): Promise<Square.Order | undefined> => {
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

  // This hook gives you:
  // - calculateTotal: function to calculate the total of the cart
  // - checkout: function to checkout the cart
  // - removeFromCart: function to remove a product from the cart
  // - cart: the current cart
  // - AddToCart: a drawer to add a product to the cart
  return {
    BuyButton: (fileName: string) => (
      <VariantDrawer
        fileName={fileName}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    ),
    CartView: (
      <CartView
        cart={cart}
        calculateTotal={calculateTotal}
        checkout={checkout}
        removeFromCart={removeFromCart}
      />
    ),
  }
}
