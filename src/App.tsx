import React from "react"
import "./App.css"
import {GameCanvas} from "./GameCanvas"
import {onRender, onSceneReady} from "./game-render"
import {GameLobbyPage} from "./pages/game-lobby/GameLobbyPage"

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      <GameCanvas antialias onRender={onRender} onSceneReady={onSceneReady} adaptToDeviceRatio={true}/><br/>
      <GameLobbyPage />
    </div>
  )
}
