import {useHistory} from "react-router-dom"
import React from "react"
import { login } from "../services/api"
import {useAppProvider} from "../providers/AppProvider"

const LoginPage: React.FC = (): React.ReactElement => {
  const history = useHistory()
  const { setSessionStorage } = useAppProvider()
  const onLogin = () => {
    const credential = {
      username: "username",
      password: "password"
    }
    login(credential)
      .then(({bookingCredential}) => {
        setSessionStorage("loginCredential", { bookingCredential: bookingCredential })
        history.push("/checkin/flights-and-passengers")
      })
  }
  return <>
    <>This is Login Page</>
    <button onClick={onLogin}>Login</button>
  </>
}

export { LoginPage }
