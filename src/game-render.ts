import {FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3} from "babylonjs"

let box: any = undefined

export const onSceneReady = (scene: Scene): void => {
  console.log("onSceneReady")
  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene)
  camera.setTarget(Vector3.Zero())

  const canvas = scene.getEngine().getRenderingCanvas()

  camera.attachControl(canvas, true)

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene)
  light.intensity = 0.7

  box = MeshBuilder.CreateBox("box", {size: 2}, scene)
  box.position.y = 1

  MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene)
}

export const onRender = (scene: Scene): void => {
  console.log("onRender")
  if (box != undefined) {
    const deltaTimeInMillis = scene.getEngine().getDeltaTime()
    const rpm = 10
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
  }
}