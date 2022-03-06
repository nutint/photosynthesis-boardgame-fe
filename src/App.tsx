import React from "react"
import "./App.css"
import { AppProvider } from "./providers/AppProvider"
import { HashRouter } from "react-router-dom"
import { MainPage } from "./pages/main/MainPage"

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      <AppProvider>
        <HashRouter>
          <MainPage/>
        </HashRouter>
      </AppProvider>
    </div>
  )
}
