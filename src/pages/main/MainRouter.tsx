import React from "react"
import { Link, Route, Switch } from "react-router-dom"

export const MainRouter: React.FC = (): React.ReactElement => <>
  <Link to="/">Hello world</Link><br/>
  <Link to="/login">Login</Link><br/>
  <Switch>
    <Route exact path="/">
      <div>Hello world clicked</div>
    </Route>
    <Route exact path="/login">
      <div>Login clicked</div>
    </Route>
  </Switch>
</>