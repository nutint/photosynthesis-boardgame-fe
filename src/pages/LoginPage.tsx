import {useHistory} from "react-router-dom"
import React from "react"
import { login } from "../services/api"

const LoginPage: React.FC = (): React.ReactElement => {
  const history = useHistory()
  const onLogin = () => {
    const credential = {
      username: "username",
      password: "password"
    }
    login(credential)
      .then(result => {
        history.push("/checkin/flights-and-passengers", credential)
      })
  }
  return <>
    <>Login</>
    <button onClick={onLogin}>Login</button>
  </>
}

export { LoginPage }
