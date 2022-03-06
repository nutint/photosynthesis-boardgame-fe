import React from "react"
import {Link} from "react-router-dom"

export const CheckinConfirmation = () => {
  return <>
    Checkin Confirmation<br/>
    <Link to={"/checkin/boarding-pass-and-bags"}>Boarding pass and Bags</Link><br/>
  </>
}