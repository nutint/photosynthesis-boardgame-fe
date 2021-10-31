import {RoomStatus} from "./RoomStatus"

export type Room = {
  name: string
  status: RoomStatus
  numberOfPlayers: string
}
export type RoomWithId = Room & { id: string }