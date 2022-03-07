import React from "react"
import {Link,} from "react-router-dom"

export const FlightsAndPassengersPage: React.FC = (): React.ReactElement => {
  return <>
    Flights and Passengers<br/>
    <Link to={"/checkin/checkin-confirmation"}>Next</Link><br/>
  </>
}
