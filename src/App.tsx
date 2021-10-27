import React from "react"
import "./App.css"
import {GameCanvas} from "./GameCanvas"
import {onRender, onSceneReady} from "./game-render"

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      Hello world
      <GameCanvas antialias onRender={onRender} onSceneReady={onSceneReady} adaptToDeviceRatio={true}/>
    </div>
  )
}
