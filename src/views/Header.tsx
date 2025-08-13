import { useMyState } from "../state"

export const Header = () => {
  const { setStep } = useMyState()

  return (
    <div>
      <h1>Golden Crow Photography</h1>
      <div>
        <button onClick={() => setStep("gallery")}>Gallery</button>
        <button onClick={() => setStep("about")}>About</button>
      </div>
    </div>
  )
}
