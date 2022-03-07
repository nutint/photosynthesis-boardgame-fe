import {Route, Switch, useRouteMatch} from "react-router-dom"
import React from "react"
import {FlightsAndPassengersPage} from "./FlightsAndPassengersPage"
import {CheckinConfirmation} from "./CheckinConfirmation"
import {BoardingPassAndBags} from "./BoardingPassAndBags"
import {useCredential} from "../providers/CredentialProvider"

export const Checkin: React.FC = (): React.ReactElement => {
  const { logout } = useCredential()
  const {path} = useRouteMatch()
  return <>
    <>Checkin</>
    <br/>
    <button onClick={logout}>Log out</button><br/>
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
