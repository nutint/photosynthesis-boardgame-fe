import React from "react"
import "./App.css"
import {AppProvider} from "./providers/AppProvider"
import {HashRouter, Route, Switch} from "react-router-dom"
import {Checkin} from "./pages/Checkin"
import {LoginPage} from "./pages/LoginPage"

export const App: React.FC = (): React.ReactElement  => {
  console.log("app rendering")
  return (
    <div className="App">
      <AppProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route path="/checkin">
              <Checkin/>
            </Route>
          </Switch>
        </HashRouter>
      </AppProvider>
    </div>
  )
}
