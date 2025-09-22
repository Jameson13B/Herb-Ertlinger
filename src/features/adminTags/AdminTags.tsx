import { useState, useEffect, useRef } from "react"
import styles from "../../pages/admin.module.css"
import { Button } from "../../components"
import { configsRef, saveTags, getTags } from "../../utils/firebase"
import { onSnapshot } from "firebase/firestore"

export const AdminTags = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [countryTags, setCountryTags] = useState<string[]>([])
  const [regionTags, setRegionTags] = useState<string[]>([])
  const [siteTags, setSiteTags] = useState<string[]>([])
  const [editTag, setEditTag] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")

  useEffect(() => {
    const unsub = onSnapshot(configsRef, (doc) => {
      const { tags = [] } = doc.data() ?? {}

      setCountryTags(tags.country)
      setRegionTags(tags.region)
      setSiteTags(tags.site)
    })

    return () => unsub()
  }, [])

  useEffect(() => {
    if (editTag && inputRef.current) {
      inputRef.current.focus()
      setEditValue(editTag)
    }
  }, [editTag])

  const handleDelete = async (category: string, tag: string) => {
    if (category === "country") {
      setCountryTags(countryTags.filter((t) => t !== tag))
    } else if (category === "region") {
      setRegionTags(regionTags.filter((t) => t !== tag))
    } else {
      setSiteTags(siteTags.filter((t) => t !== tag))
    }
  }
  const handleAdd = async (category: string) => {
    if (category === "country") {
      setCountryTags([...countryTags, "[New Tag]"])
    } else if (category === "region") {
      setRegionTags([...regionTags, "[New Tag]"])
    } else {
      setSiteTags([...siteTags, "[New Tag]"])
    }
  }
  const handleSave = async () => {
    await saveTags({
      country: countryTags,
      region: regionTags,
      site: siteTags,
    })
  }

  const handleTagEdit = (category: string, oldTag: string) => {
    if (category === "country") {
      setCountryTags(countryTags.map((t) => (t === oldTag ? editValue : t)))
    } else if (category === "region") {
      setRegionTags(regionTags.map((t) => (t === oldTag ? editValue : t)))
    } else {
      setSiteTags(siteTags.map((t) => (t === oldTag ? editValue : t)))
    }
    setEditTag(null)
  }

  return (
    <div className={styles.adminContent}>
      <div className={styles.adminContentRow}>
        <h2 className={styles.adminContentRowHeader}>Tags</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {isEditing && (
            <Button
              onClick={() => {
                getTags().then((tags) => {
                  setCountryTags(tags.country)
                  setRegionTags(tags.region)
                  setSiteTags(tags.site)
                  setEditTag(null)
                  setEditValue("")
                  setIsEditing(false)
                })
              }}
              variant="secondary"
            >
              Cancel
            </Button>
          )}
          <Button
            onClick={async () => {
              if (isEditing) {
                await handleSave()
              }
              setIsEditing((current) => !current)
            }}
            variant="primary"
          >
            {isEditing ? "Done" : "Edit"}
          </Button>
        </div>
      </div>

      <div className={styles.adminContentRow}>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <h2 className={styles.adminContentRowTitle}>Country Tags</h2>
          {isEditing && (
            <Button variant="short" onClick={() => handleAdd("country")}>
              Add
            </Button>
          )}
        </div>
        <div className={styles.adminContentTagRow}>
          {countryTags.map((tag, i) => (
            <span
              key={i}
              className={styles.adminContentTag}
              onClick={() => isEditing && setEditTag(tag)}
              style={{
                backgroundColor: isEditing ? "var(--yellow)" : "transparent",
                color: isEditing ? "var(--dark)" : "var(--stone)",
                borderColor: isEditing ? "var(--yellow)" : "var(--stone)",
              }}
            >
              {editTag === tag ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => handleTagEdit("country", tag)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                />
              ) : (
                tag
              )}{" "}
              {isEditing && (
                <span onClick={() => handleDelete("country", tag)}>X</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.adminContentRow}>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <h2 className={styles.adminContentRowTitle}>Region Tags</h2>
          {isEditing && (
            <Button variant="short" onClick={() => handleAdd("region")}>
              Add
            </Button>
          )}
        </div>
        <div className={styles.adminContentTagRow}>
          {regionTags.map((tag, i) => (
            <span
              key={i}
              className={styles.adminContentTag}
              onClick={() => isEditing && setEditTag(tag)}
              style={{
                backgroundColor: isEditing ? "var(--yellow)" : "transparent",
                color: isEditing ? "var(--dark)" : "var(--stone)",
                borderColor: isEditing ? "var(--yellow)" : "var(--stone)",
              }}
            >
              {editTag === tag ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => handleTagEdit("region", tag)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                />
              ) : (
                tag
              )}{" "}
              {isEditing && (
                <span onClick={() => handleDelete("region", tag)}>X</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.adminContentRow}>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <h2 className={styles.adminContentRowTitle}>Site Tags</h2>
          {isEditing && (
            <Button variant="short" onClick={() => handleAdd("site")}>
              Add
            </Button>
          )}
        </div>
        <div className={styles.adminContentTagRow}>
          {siteTags.map((tag, i) => (
            <span
              key={i}
              className={styles.adminContentTag}
              onClick={() => isEditing && setEditTag(tag)}
              style={{
                backgroundColor: isEditing ? "var(--yellow)" : "transparent",
                color: isEditing ? "var(--dark)" : "var(--stone)",
                borderColor: isEditing ? "var(--yellow)" : "var(--stone)",
              }}
            >
              {editTag === tag ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => handleTagEdit("site", tag)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                />
              ) : (
                tag
              )}{" "}
              {isEditing && (
                <span onClick={() => handleDelete("site", tag)}>X</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
