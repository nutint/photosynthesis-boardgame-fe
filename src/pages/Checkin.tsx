import {Route, Switch, useRouteMatch} from "react-router-dom"
import React from "react"

export const Checkin = () => {
  const {path, url} = useRouteMatch()
  return <>
    <>Checkin</>
    <br/>
    <Switch>
      <Route exact path={path}>
        <>Default</>
      </Route>
      <Route path={`${path}/flights-and-passengers`}>
        <>Flights and Passengers</>
      </Route>
    </Switch>
  </>
}