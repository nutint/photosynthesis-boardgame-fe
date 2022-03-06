import {Link, Route, Switch, useRouteMatch} from "react-router-dom"
import React from "react"
import {FlightsAndPassengersPage} from "./FlightsAndPassengersPage"
import {CheckinConfirmation} from "./CheckinConfirmation"
import {BoardingPassAndBags} from "./BoardingPassAndBags"

export const Checkin = () => {
  const {path, url} = useRouteMatch()
  return <>
    <>Checkin</>
    <br/>
    <Link to={"/login"}>Log out</Link><br/>
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