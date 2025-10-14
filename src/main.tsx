import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./app.css"
import { ConfigProvider } from "antd"

createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      components: {
        Radio: {
          colorPrimary: "#e6ab07",
          colorBorder: "#a8a293",
          dotSize: 8,
          radioSize: 20,
        },
      },
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ConfigProvider>
)
