import {Engine, Scene} from "babylonjs"
import React, {useEffect, useRef} from "react"

type Props = {
  antialias: boolean
  engineOptions: any
  adaptToDeviceRatio: boolean
  sceneOptions: any
  onRender: (scene: Scene) => void
  onSceneReady: (scene: Scene) => void
}

export const GameCanvas: React.FC<Props> = ({
  antialias,
  engineOptions,
  adaptToDeviceRatio,
  sceneOptions,
  onRender,
  onSceneReady,
  ...rest
}): React.ReactElement => {
  const reactCanvas = useRef(null)
  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio)
      const scene = new Scene(engine, sceneOptions)

      if (scene.isReady()) {
        onSceneReady(scene)
      } else {
        scene.onReadyObservable.addOnce((scene) => onSceneReady(scene))
      }

      engine.runRenderLoop(() => {
        onRender(scene)
      })

      const resize = () => {
        scene.getEngine().resize()
      }

      if (window) {
        window.addEventListener("resize", resize)
      }

      return () => {
        scene.getEngine().dispose()

        if (window) {
          window.removeEventListener("resize", resize)
        }
      }
    }
  }, [reactCanvas])

  return <canvas ref={reactCanvas} {...rest} />
}