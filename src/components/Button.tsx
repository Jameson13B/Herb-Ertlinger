import styles from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
