import { create } from "zustand"

type Step = "gallery" | "about"
interface MyState {
  prints: {
    id: string
    name: string
    description: string
    image: string
  }[]
  step: Step
  setStep: (step: Step) => void
}

export const useMyState = create<MyState>((set) => ({
  prints: [],
  step: "gallery",
  setStep: (step: Step) => set({ step }),
}))
