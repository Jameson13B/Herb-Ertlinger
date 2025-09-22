import { useEffect, useReducer, useState } from "react"
import styles from "../../pages/admin.module.css"
import { Button } from "../../components"
import { CustomUpload } from "../../components"
import { Dropdown } from "../../components"
import { assetsRef, configsRef, uploadPhoto } from "../../utils/firebase"
import { addDoc, onSnapshot } from "firebase/firestore"

export const AdminPhotos = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [tags, setTags] = useState<{
    country: string[]
    region: string[]
    site: string[]
  }>({ country: [], region: [], site: [] })
  const allRequiredFieldsSet =
    state.fileName !== null &&
    state.productNumber !== null &&
    state.countryTag !== null &&
    state.regionTag !== null &&
    state.siteTag !== null
  const startedAdding =
    state.fileName !== null ||
    state.productNumber !== null ||
    state.countryTag !== null ||
    state.regionTag !== null ||
    state.siteTag !== null ||
    state.connectedTo !== null

  useEffect(() => {
    const unsub = onSnapshot(configsRef, (doc) => {
      const { tags = [] } = doc.data() ?? {}
      setTags(tags)
    })

    return () => unsub()
  }, [])

  const handleSubmit = async () => {
    if (!state.fileName || !state.asset) {
      alert("Please fill in all fields")
      return
    }

    await uploadPhoto(state.fileName, state.asset as File).then(() => {
      addDoc(assetsRef, {
        fileName: state.fileName,
        productNumber: state.productNumber,
        countryTag: state.countryTag,
        regionTag: state.regionTag,
        siteTag: state.siteTag,
        connectedTo: state.connectedTo ?? "",
      }).then(() => {
        alert("Photo added successfully")
        dispatch({ type: "resetFields" })
      })
    })
  }

  return (
    <div className={styles.adminContent}>
      <div className={styles.adminContentRow}>
        <h2 className={styles.adminContentRowHeader}>New Photos</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {startedAdding && (
            <Button
              variant="secondary"
              onClick={() => dispatch({ type: "resetFields" })}
            >
              Cancel
            </Button>
          )}
          <Button
            disabled={!allRequiredFieldsSet}
            onClick={handleSubmit}
            variant="primary"
          >
            Add
          </Button>
        </div>
      </div>
      <div className={styles.adminContentRow}>
        <h2
          className={styles.adminContentRowTitle}
          style={{ width: "initial" }}
        >
          Upload File
        </h2>
        <CustomUpload
          fileName={state.fileName}
          setFileName={(value) =>
            dispatch({ type: "setField", field: "fileName", value })
          }
          setAsset={(value) => dispatch({ type: "setAsset", value: value })}
        />
      </div>
      <div className={styles.adminContentRow}>
        <h2
          className={styles.adminContentRowTitle}
          style={{ width: "initial" }}
        >
          Gumroad Product #
        </h2>
        <input
          className={`${styles.adminContentRowInput} ${
            state.productNumber ? styles.active : ""
          }`}
          name="productNumber"
          placeholder="Product #"
          onChange={(e) =>
            dispatch({
              type: "setField",
              field: "productNumber",
              value: e.target.value,
            })
          }
          type="text"
          value={state.productNumber ?? ""}
        />
      </div>
      <div className={styles.adminContentRow}>
        <h2
          className={styles.adminContentRowTitle}
          style={{ width: "initial" }}
        >
          Country Tag
        </h2>
        <Dropdown
          name="countryTag"
          options={tags.country.map((tag) => ({ value: tag, label: tag }))}
          value={state.countryTag}
          onChange={(value) =>
            dispatch({ type: "setField", field: "countryTag", value })
          }
          placeholder="Select Country ⬇"
        />
      </div>
      <div className={styles.adminContentRow}>
        <h2
          className={styles.adminContentRowTitle}
          style={{ width: "initial" }}
        >
          Region Tag
        </h2>
        <Dropdown
          name="regionTag"
          options={tags.region.map((tag) => ({ value: tag, label: tag }))}
          value={state.regionTag}
          onChange={(value) =>
            dispatch({ type: "setField", field: "regionTag", value })
          }
          placeholder="Select Region ⬇"
        />
      </div>
      <div className={styles.adminContentRow}>
        <h2
          className={styles.adminContentRowTitle}
          style={{ width: "initial" }}
        >
          Site Tag
        </h2>
        <Dropdown
          name="siteTag"
          options={tags.site.map((tag) => ({ value: tag, label: tag }))}
          value={state.siteTag}
          onChange={(value) =>
            dispatch({ type: "setField", field: "siteTag", value })
          }
          placeholder="Select Site ⬇"
        />
      </div>
      <div className={styles.adminContentRow}>
        <h2
          className={styles.adminContentRowTitle}
          style={{ width: "initial" }}
        >
          Connected To
        </h2>
        <input
          className={`${styles.adminContentRowInput} ${
            state.connectedTo ? styles.active : ""
          }`}
          name="connectedTo"
          placeholder="Product ID"
          onChange={(e) =>
            dispatch({
              type: "setField",
              field: "connectedTo",
              value: e.target.value,
            })
          }
          type="text"
          value={state.connectedTo ?? ""}
        />
      </div>
    </div>
  )
}
const initialState = {
  fileName: null,
  asset: null,
  productNumber: null,
  countryTag: null,
  regionTag: null,
  siteTag: null,
  connectedTo: null,
}
const reducer = (
  state: {
    fileName: string | null
    asset: File | null
    productNumber: string | null
    countryTag: string | null
    regionTag: string | null
    siteTag: string | null
    connectedTo: string | null
  },
  action: {
    type: "setField" | "resetFields" | "setAsset"
    field?: string
    value?: string | File | null
  }
) => {
  switch (action.type) {
    case "setField":
      if (action.field === "asset") {
        return { ...state, asset: action.value as File | null }
      }
      return {
        ...state,
        [action.field as string]: action.value as string | null,
      }
    case "setAsset":
      return { ...state, asset: action.value as File | null }
    case "resetFields":
      return initialState
    default:
      return state
  }
}
