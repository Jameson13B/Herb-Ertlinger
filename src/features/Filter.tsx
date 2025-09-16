import styles from "./filter.module.css"

export const Filter = ({
  filterState,
  setFilterState,
}: {
  filterState: {
    country: { tag: string; active: boolean }[]
    region: { tag: string; active: boolean }[]
    site: { tag: string; active: boolean }[]
  }
  setFilterState: (filterState: {
    country: { tag: string; active: boolean }[]
    region: { tag: string; active: boolean }[]
    site: { tag: string; active: boolean }[]
  }) => void
}) => {
  return (
    <div className={styles.galleryFiltersSideBar}>
      <h2>View by location</h2>
      <h3>Country:</h3>
      <div className={styles.filterTags}>
        {filterState.country.map((country) => (
          <span
            className={`${styles.filterTag} ${country.active ? styles.filterTagActive : ""}`}
            key={country.tag}
            onClick={() =>
              setFilterState({
                ...filterState,
                country: filterState.country.map((t) =>
                  t.tag === country.tag ? { ...t, active: !t.active } : t
                ),
              })
            }
          >
            {country.tag} {country.active && "X"}
          </span>
        ))}
      </div>
      <h3>Region:</h3>
      <div className={styles.filterTags}>
        {filterState.region.map((region) => (
          <span
            className={`${styles.filterTag} ${region.active ? styles.filterTagActive : ""}`}
            key={region.tag}
            onClick={() =>
              setFilterState({
                ...filterState,
                region: filterState.region.map((t) =>
                  t.tag === region.tag ? { ...t, active: !t.active } : t
                ),
              })
            }
          >
            {region.tag} {region.active && "X"}
          </span>
        ))}
      </div>
      <h3>Site:</h3>
      <div className={styles.filterTags}>
        {filterState.site.map((site) => (
          <span
            className={`${styles.filterTag} ${site.active ? styles.filterTagActive : ""}`}
            key={site.tag}
            onClick={() =>
              setFilterState({
                ...filterState,
                site: filterState.site.map((t) =>
                  t.tag === site.tag ? { ...t, active: !t.active } : t
                ),
              })
            }
          >
            {site.tag} {site.active && "X"}
          </span>
        ))}
      </div>
    </div>
  )
}
