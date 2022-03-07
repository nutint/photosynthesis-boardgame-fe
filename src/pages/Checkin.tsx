import {Link, Route, Switch, useHistory, useRouteMatch} from "react-router-dom"
import React from "react"
import {FlightsAndPassengersPage} from "./FlightsAndPassengersPage"
import {CheckinConfirmation} from "./CheckinConfirmation"
import {BoardingPassAndBags} from "./BoardingPassAndBags"

export const Checkin: React.FC = (): React.ReactElement => {
  const history = useHistory()
  const {path} = useRouteMatch()
  const onLogout = () => {
    history.push("/login")
  }
  return <>
    <>Checkin</>
    <br/>
    <button onClick={onLogout}>Log out</button><br/>
    <br/>
    <Switch>
      <Route exact path={`${path}/flights-and-passengers`}>
        <FlightsAndPassengersPage/>
      </Route>
      <Route exact path={`${path}/checkin-confirmation`}>
        <CheckinConfirmation/>
      </Route>
      <Route exact path={`${path}/boarding-pass-and-bags`}>
        <BoardingPassAndBags/>
      </Route>
    </Switch>
  </>
}
