import { BrowserRouter, RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import ThemeContextProvider from "./context/ThemeContextProvider"

function App() {

  return (
    <ThemeContextProvider>
    <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}

export default App
