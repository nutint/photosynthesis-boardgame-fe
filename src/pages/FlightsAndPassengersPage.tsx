import React from "react"
import {Link} from "react-router-dom"

export const FlightsAndPassengersPage = () => {
  return <>
    Flights and Passengers<br/>
    <Link to={"/checkin/checkin-confirmation"}>Checkin Confirmation</Link><br/>
  </>
}