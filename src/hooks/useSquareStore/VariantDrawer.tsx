import { useState } from "react"
import { Drawer, Radio, type RadioChangeEvent } from "antd"
import { Button } from "../../components/button/Button"
import type { Product } from "./useSquareStore"
import styles from "./variantDrawer.module.css"

export const VariantDrawer = (props: {
  fileName: string
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}) => {
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState("25x25")
  const [printingOption, setPrintingOption] = useState(
    "Photo Paper (Luster Prints)"
  )

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setOpen(true)
        }}
        className={styles.shopButton}
      >
        Shop
      </Button>
      <Drawer
        title={<h1>CUSTOMIZE YOUR PRINT</h1>}
        closeIcon={false}
        onClose={() => setOpen(false)}
        open={open}
        classNames={{ header: styles.drawerHeader, body: styles.drawerBody }}
      >
        <img
          className={styles.logo}
          src={props.fileName}
          alt="Golden Crow Logo"
        />

        <div>
          <h2 style={{ marginBottom: "16px" }}>Size</h2>
          <Radio.Group
            className={styles.radioGroup}
            defaultValue={size}
            options={[
              { label: "25x25", value: "25x25" },
              { label: "48x72", value: "48x72" },
              { label: "136x154", value: "136x154" },
            ]}
            onChange={(value: RadioChangeEvent) => setSize(value.target.value)}
          />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ marginBottom: "16px", marginTop: "32px" }}>
            Printing Options
          </h2>
          <Radio.Group
            className={styles.radioGroup}
            defaultValue={printingOption}
            options={[
              {
                label: "Photo Paper (Luster Prints)",
                value: "Photo Paper (Luster Prints)",
              },
              {
                label: "Photo Paper (Fine Arts Prints)",
                value: "Photo Paper (Fine Arts Prints)",
              },
              { label: "Canvas Print", value: "Canvas Print" },
              { label: "Metal Print", value: "Metal Print" },
            ]}
            onChange={(value: RadioChangeEvent) =>
              setPrintingOption(value.target.value)
            }
          />
        </div>

        <div className={styles.subtotal}>
          <span>Subtotal:</span> <span>$1000</span>
        </div>

        <div className={styles.buttons}>
          <Button variant="neutral" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
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
