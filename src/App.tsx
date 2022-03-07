import React from "react"
import "./App.css"
import {AppProvider} from "./providers/AppProvider"
import {HashRouter, Route, Switch} from "react-router-dom"
import {Checkin} from "./pages/Checkin"
import {LoginPage} from "./pages/LoginPage"
import {CredentialProvider} from "./providers/CredentialProvider"
import {CheckinInfoProvider} from "./providers/CheckinInfoProvider"

export const App: React.FC = (): React.ReactElement  => {
  return (
    <div className="App">
      <AppProvider sessionStorage={window.sessionStorage}>
        <HashRouter>
          <Switch>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route path="/checkin">
              <CredentialProvider>
                <CheckinInfoProvider>
                  <Checkin/>
                </CheckinInfoProvider>
              </CredentialProvider>
            </Route>
          </Switch>
        </HashRouter>
      </AppProvider>
    </div>
  )
}
