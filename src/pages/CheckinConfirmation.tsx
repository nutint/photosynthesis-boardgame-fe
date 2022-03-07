import React from "react"
import {Link} from "react-router-dom"

export const CheckinConfirmation: React.FC = (): React.ReactElement => {
  return <>
    Checkin Confirmation<br/>
    <Link to={"/checkin/boarding-pass-and-bags"}>Boarding pass and Bags</Link><br/>
  </>
}
