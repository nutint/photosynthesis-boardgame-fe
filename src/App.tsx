import React from "react"
import "./App.css"
import { GameCanvas } from "./GameCanvas"
import { onRender, onSceneReady } from "./game-render"
import { GameLobbyPage } from "./pages/game-lobby/GameLobbyPage"
import { AppProvider } from "./providers/AppProvider"
import { BrowserRouter } from "react-router-dom"
import { MainPage } from "./pages/main/MainPage"

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      <AppProvider>
        <GameCanvas
          antialias
          onRender={ onRender}
          onSceneReady={ onSceneReady }
          adaptToDeviceRatio={ true }
        /><br/>
        <GameLobbyPage />
        <BrowserRouter>
          <MainPage/>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}
