import React from "react"
import "./App.css"
import {AppProvider} from "./providers/AppProvider"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Checkin} from "./pages/Checkin"
import {LoginPage} from "./pages/LoginPage"

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route path="/checkin">
              <Checkin/>
            </Route>
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}
