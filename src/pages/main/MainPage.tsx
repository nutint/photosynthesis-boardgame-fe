import React from "react"
import { MainRouter } from "./MainRouter"
import { BrowserRouter } from "react-router-dom"

export const MainPage: React.FC = (): React.ReactElement => <>
  <button>Hello world</button><br/>
  <BrowserRouter>
    <MainRouter/>
  </BrowserRouter>
</>