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
      <AppProvider sessionStorage={{
        setItem: (key: string, value: any) => {
          if(value === null) {
            window.sessionStorage.removeItem(key)
          } else {
            window.sessionStorage.setItem(key, JSON.stringify(value))
          }
        },
        getItem: (key: string) => JSON.parse(window.sessionStorage.getItem(key) as any),
      }}>
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
