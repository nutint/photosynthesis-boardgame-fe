import React from "react"
import {useAppProvider} from "./AppProvider"
import {useHistory} from "react-router-dom"

type CredentialContextProps = {
  bookingCredential: string | null,
  logout: () => void
}
const CredentialContext = React.createContext<CredentialContextProps>({
  bookingCredential: null,
  logout: () => { throw new Error("")},
})

type ProviderProps = {
  children: React.ReactNode
}
export const CredentialProvider: React.FC<ProviderProps> = (props): React.ReactElement => {
  const { getSessionStorage, setSessionStorage } = useAppProvider()
  const history = useHistory()

  const loginCredentialKey = "loginCredential"
  const bookingCredential = getSessionStorage(loginCredentialKey)

  if(bookingCredential === null) {
    history.push("/login")
    return <></>
  }

  const logout = () => {
    setSessionStorage(loginCredentialKey, null)
    history.push("/login")
  }

  return <CredentialContext.Provider value={{
    bookingCredential,
    logout
  }}>{ props.children }</CredentialContext.Provider>
}

export const useCredential = () => React.useContext(CredentialContext)
