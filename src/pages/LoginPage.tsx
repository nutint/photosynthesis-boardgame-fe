import {useHistory} from "react-router-dom"
import React from "react"
import { login } from "../services/api"
import {useAppProvider} from "../providers/AppProvider"

const LoginPage: React.FC = (): React.ReactElement => {
  const history = useHistory()
  const { setSessionStorage, getSessionStorage } = useAppProvider()
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

  const bookingCredential = getSessionStorage("loginCredential")
  console.log("bookingCredential", bookingCredential)
  return <>
    <>This is Login Page</>
    <button onClick={onLogin}>Login</button>
  </>
}

export { LoginPage }
