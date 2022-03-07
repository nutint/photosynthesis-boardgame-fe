import React from "react"

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

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({children, }) => {
  const appProvider = {
    children,
    setSessionStorage: (key: string, value: any) => window.sessionStorage.setItem(key, value),
    getSessionStorage: (key: string) => window.sessionStorage.getItem(key)
  }
  return <AppContext.Provider value={appProvider}>{children}</AppContext.Provider>
}
