import React from "react"
import { Route, Switch } from "react-router-dom"

export const MainRouter: React.FC = (): React.ReactElement => <>
  <Switch>
    <Route exact path="/">
      <div>Hello world clicked</div>
    </Route>
    <Route exact path="/login">
      <div>Login clicked</div>
    </Route>
  </Switch>
</>