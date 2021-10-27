import React from "react"
import "./App.css"
import {Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder} from "babylonjs"
import {GameCanvas} from "./GameCanvas"

let box: any = undefined
export const onSceneReady = (scene: Scene): void => {
  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene)

  camera.setTarget(Vector3.Zero())

  const canvas = scene.getEngine().getRenderingCanvas()

  camera.attachControl(canvas, true)
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene)
  light.intensity = 0.7
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene)
  box.position.y = 1

  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene)
}

export const onRender = (scene: Scene): void => {
  if(box != undefined) {
    const deltaTimeInMillis = scene.getEngine().getDeltaTime()
    const rpm = 10
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
  }
}

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      <GameCanvas antialias onRender={onRender} onSceneReady={onSceneReady}/>
    </div>
  )
}
