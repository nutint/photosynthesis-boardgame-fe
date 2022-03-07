import React from "react"
import {useAppProvider} from "./AppProvider"
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
  return <CredentialContext.Provider value={{
    bookingCredential: getSessionStorage("bookingCredential")
  }}>{ props.children }</CredentialContext.Provider>
}

export const useCredential = () => React.useContext(CredentialContext)
