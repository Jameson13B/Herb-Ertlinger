import { useState } from "react"
import { Button, Drawer } from "antd"
import type { Product } from "./useSquareStore"

export const VariantDrawer = (props: {
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Buy
      </Button>
      <Drawer
        title="CUSTOMIZE YOUR PRINT"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <p>Some contents here about the print</p>
        <p>Then there will be some options for the print</p>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
        <div>
          <Button type="default" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={() => {
              props.addToCart({
                catalog_object_id: "1",
                quantity: "1",
              })
              setOpen(false)
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Drawer>
    </>
  )
}
