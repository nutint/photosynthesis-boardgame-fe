import React from "react"
import {RoomWithId} from "../../../model/Room"

type Props = {
  onClickCreateRoom?: () => void
  rooms?: RoomWithId[]
}

export const GameLobby: React.FC<Props> = ({
  onClickCreateRoom,
  rooms
}):React.ReactElement => (<>
  <div>
    {
      (rooms || []).map(room => (<div key={room.id}>
        <div>{ room.name } { room.status } { room.numberOfPlayers }</div><br/>
      </div>))
    }
  </div>
</>)