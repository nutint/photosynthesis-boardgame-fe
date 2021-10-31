import React from "react"
import { Route, Switch } from "react-router-dom"
import { GameLobbyPage } from "../game-lobby/GameLobbyPage"
import { GameCanvas } from "../../GameCanvas"
import { onRender, onSceneReady } from "../../game-render"

export const MainRouter: React.FC = (): React.ReactElement => <>
  <Switch>
    <Route exact path="/">
      <div>Hello world clicked</div>
    </Route>
    <Route exact path="/login">
      <div>Login clicked</div>
    </Route>
    <Route exact path="/game-lobby">
      <GameLobbyPage/>
    </Route>
    <Route exact path="/game">
      <GameCanvas
        antialias
        onRender={ onRender}
        onSceneReady={ onSceneReady }
        adaptToDeviceRatio={ true }
      />
    </Route>
  </Switch>
</>