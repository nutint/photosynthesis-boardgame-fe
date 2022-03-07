import React, {useEffect, useState} from "react"
import { getCheckinInfo } from "../services/api"
import {useHistory} from "react-router-dom"

type CheckinInfo = {
  passengers: string[]
}

const CheckinInfoContext = React.createContext<CheckinInfo>({
  passengers: []
})

type ProviderProps = {
  children: React.ReactNode
}
export const CheckinInfoProvider: React.FC<ProviderProps> = ({children}): React.ReactElement => {
  const history = useHistory()
  const [ checkinInfo, setCheckinInfo ] = useState<CheckinInfo>({
    passengers: []
  })

  useEffect(() => {
    (async ()=> {
      getCheckinInfo()
        .then(() => {
          setCheckinInfo({
            passengers: ["abcd"]
          })
        })
        .catch(() => {
          history.push("/login")
        })
    })()
  }, [history])
  return <CheckinInfoContext.Provider value={checkinInfo}>{children}</CheckinInfoContext.Provider>
}

export const useCheckinInfo = () => React.useContext(CheckinInfoContext)
