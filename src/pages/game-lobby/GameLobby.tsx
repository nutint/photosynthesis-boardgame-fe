import React from "react"

type Props = {
  onClickCreateRoom?: () => void
}

export const GameLobby: React.FC<Props> = ({onClickCreateRoom}):React.ReactElement => (<>
  <button onClick={onClickCreateRoom}>Create Room</button>
</>)