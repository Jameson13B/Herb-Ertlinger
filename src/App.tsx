import { useDarkMode } from "./useDarkMode.tsx"
import { darkTheme, lightTheme } from "./theme.css.ts"
import { useCounterStore } from './state'

function App() {
  const { count, increment, decrement } = useCounterStore()
  const { isDarkMode, setIsDarkMode, isDarkModePreferred } = useDarkMode(
    lightTheme,
    darkTheme
  )

  return (
    <>
      <h1>Atomic10 Create Stack</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
