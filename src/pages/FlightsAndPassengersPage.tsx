import React from "react"
import {Link,} from "react-router-dom"
import {useCheckinInfo} from "../providers/CheckinInfoProvider"

export const FlightsAndPassengersPage: React.FC = (): React.ReactElement => {
  const checkinInfo = useCheckinInfo()

  console.log("FlightsAndPassengersPage", checkinInfo)
  return <>
    Flights and Passengers<br/>
    <Link to={"/checkin/checkin-confirmation"}>Next</Link><br/>
  </>
}
