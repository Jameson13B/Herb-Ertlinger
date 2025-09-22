import styles from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: "primary" | "secondary" | "skinny" | "short"
  className?: string
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
