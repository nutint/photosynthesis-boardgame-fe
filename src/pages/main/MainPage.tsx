import React from "react"
import { MainRouter } from "./MainRouter"
import { BrowserRouter, useHistory } from "react-router-dom"

export const MainPage: React.FC = (): React.ReactElement => {
  const history = useHistory()

  return <>
    <button onClick={() => history.push("/login")}>Home Page</button>
    <br/>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  </>
}