import {useHistory} from "react-router-dom"
import React from "react"

export function LoginPage() {
  const history = useHistory()
  return <>
    <>Login</>
    <button onClick={() => history.push("/checkin/flights-and-passengers")}>Checkin</button>
  </>
}