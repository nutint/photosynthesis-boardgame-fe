import React from "react"
import "./App.css"
import { AppProvider } from "./providers/AppProvider"
import { BrowserRouter } from "react-router-dom"
import { MainPage } from "./pages/main/MainPage"

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <MainPage/>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}
