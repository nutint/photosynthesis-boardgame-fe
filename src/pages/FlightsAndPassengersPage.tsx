import React from "react"
import {Link,} from "react-router-dom"

type Props = {
  foo?: string
}
export const FlightsAndPassengersPage = (props: Props) => {
  console.log("props", props)
  return <>
    Flights and Passengers<br/>
    <Link to={"/checkin/checkin-confirmation"}>Checkin Confirmation</Link><br/>
  </>
}