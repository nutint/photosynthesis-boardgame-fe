import React, {useContext} from "react"

type Props = {
  children: React.ReactNode,
  setSessionStorage: (key: string, value: any) => void,
  getSessionStorage: (key: string) => any
}

const defaultProps: Props = {
  children: <></>,
  setSessionStorage: (key: string, value: any): void => {
    throw Error("Not Implemented")
  },
  getSessionStorage: (key: string) => {
    throw Error("Not Implemented")
  }
}

const AppContext = React.createContext<Props>(defaultProps)

type ProviderProps = {
  children: React.ReactNode,
  sessionStorage: {
    getItem: (key: string) => any,
    setItem: (key: string, value: any) => void
  }
}

export const AppProvider: React.FC<ProviderProps> = ({
  children,
  sessionStorage
}) => {
  const appProvider = {
    children,
    setSessionStorage: sessionStorage.setItem,
    getSessionStorage: sessionStorage.getItem
  }
  return <AppContext.Provider value={appProvider}>{children}</AppContext.Provider>
}

export const useAppProvider = () => useContext(AppContext)

/**
 * Tasks
 *  - Route structure
 *     - /login
 *     - /checkin/flights-and-passengers
 *     - /checkin/confirmation
 *     - /checkin/boarding-pass-and-bags
 *  - [Spike] Sending bookingCredential to Credential provider
 *  - [Spike] CredentialProvider should be able to provide redirect to log in functionality
 *  - [Spike] CheckinInfoProvider should be able to access loginCredential, and retrieve CheckinInfo
 *  - [Spike] CheckinInfoProvider should be able to redirect to log in screen with credential is expired
 */
