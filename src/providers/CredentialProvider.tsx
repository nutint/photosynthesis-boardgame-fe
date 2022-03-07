import React from "react"
import {useAppProvider} from "./AppProvider"
import {useHistory} from "react-router-dom"

type CredentialContextProps = {
  bookingCredential: string | null
}
const CredentialContext = React.createContext<CredentialContextProps>({
  bookingCredential: null
})

type ProviderProps = {
  children: React.ReactNode
}
export const CredentialProvider: React.FC<ProviderProps> = (props): React.ReactElement => {
  const { getSessionStorage } = useAppProvider()
  const history = useHistory()

  const bookingCredential = getSessionStorage("bookingCredential")
  if(bookingCredential === null) {
    history.push("/login")
    return <></>
  }

  return <CredentialContext.Provider value={{
    bookingCredential
  }}>{ props.children }</CredentialContext.Provider>
}

export const useCredential = () => React.useContext(CredentialContext)
