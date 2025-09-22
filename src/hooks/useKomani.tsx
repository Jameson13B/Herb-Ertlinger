import { useState, useEffect } from "react"
import { useMyState } from "../utils/state"

const komaniCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "a",
  "b",
]
export const useKomani = () => {
  const { setPage } = useMyState()
  const [currentCode, setCurrentCode] = useState<string[]>([])

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const newCode = [...currentCode, e.key]
      checkCode(newCode)
    }
    window.addEventListener("keydown", listener)
    return () => window.removeEventListener("keydown", listener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCode])

  const checkCode = (newCode: string[]) => {
    if (newCode.join("") === komaniCode.join("")) {
      setPage("admin")
      setCurrentCode([])
    } else if (newCode.length === 10) {
      setCurrentCode([])
    } else if (newCode[newCode.length - 1] === "Escape") {
      setCurrentCode([])
    } else {
      setCurrentCode(newCode)
    }
  }
}
