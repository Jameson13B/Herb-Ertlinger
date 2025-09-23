import { useEffect } from "react"
import styles from "./customUpload.module.css"

export const CustomUpload = ({
  fileName,
  setFileName,
  setAsset,
}: {
  fileName: string | null
  setFileName: (fileName: string | null) => void
  setAsset: (asset: File | null) => void
}) => {
  useEffect(() => {
    const fileUpload = document.getElementById("fileUpload")

    fileUpload?.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLInputElement
      const fileName = target.files?.[0]?.name || "No file chosen"
      setFileName(fileName)
      setAsset(target.files?.[0] || null)
    })

    return () => {
      fileUpload?.removeEventListener("change", (e: Event) => {
        const target = e.target as HTMLInputElement
        const fileName = target.files?.[0]?.name || "No file chosen"
        setFileName(fileName)
        setAsset(target.files?.[0] || null)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Reset file input when fileName is cleared
  useEffect(() => {
    if (fileName === null) {
      const fileUpload = document.getElementById(
        "fileUpload"
      ) as HTMLInputElement
      if (fileUpload) {
        fileUpload.value = ""
      }
    }
  }, [fileName])

  return (
    <>
      <input
        id="fileUpload"
        type="file"
        accept={"image/jpg, image/jpeg"}
        style={{ display: "none" }}
      />
      {!fileName ? (
        <label htmlFor="fileUpload" className={styles.customFileButton}>
          Upload
        </label>
      ) : (
        <span className={styles.customFileName}>{fileName}</span>
      )}
    </>
  )
}
