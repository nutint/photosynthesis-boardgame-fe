import {useHistory} from "react-router-dom"
import React from "react"

const LoginPage: React.FC = (): React.ReactElement => {
  const history = useHistory()
  const login = () => {
    const credential = {
      username: "username",
      password: "password"
    }
    console.log("credential = ", credential)
    history.push("/checkin/flights-and-passengers", credential)
  }
  return <>
    <>Login</>
    <button onClick={login}>Login</button>
  </>
}

export { LoginPage }