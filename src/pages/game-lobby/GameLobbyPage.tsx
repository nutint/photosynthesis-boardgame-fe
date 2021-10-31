import React, {useEffect, useState} from "react"
import { RoomWithId } from "../../model/Room"
import { GameService } from "../../services/game-service"
import { GameLobby } from "./components/GameLobby"

export const GameLobbyPage: React.FC = (): React.ReactElement => {
  const [rooms, setRooms] = useState<RoomWithId[]>([])
  useEffect(() => {
    GameService
      .getRooms()
      .then(resultRooms => setRooms(resultRooms))
  }, [])
  return <>
    <GameLobby rooms={rooms} />
  </>
}