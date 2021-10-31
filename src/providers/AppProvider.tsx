import React, {Component} from "react"
import {AppConfig} from "../confic/app-config"

type Props = {
  children: React.ReactNode
}
export const AppProvider: React.FC<Props> = ({
  children,
}): React.ReactElement => {
  return <>{children}</>
}