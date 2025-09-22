import styles from "./dropdown.module.css"

interface DropdownProps {
  options: { value: string; label: string }[]
  value: string | null
  onChange: (value: string) => void
  placeholder?: string
  name: string
}

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  name,
}: DropdownProps) => {
  return (
    <select
      className={`${styles.dropdown} ${value ? styles.active : ""}`}
      id={name}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      value={value ?? ""}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
