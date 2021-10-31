import {RoomWithId} from "../model/Room"
import {RoomStatus} from "../model/RoomStatus"

export const GameService = ({
  getRooms: async (): Promise<RoomWithId[]> => [
    { id: "room-1", name: "Untitled", status: RoomStatus.Starting, numberOfPlayers: "3/4" },
    { id: "room-2", name: "Untitled-2", status: RoomStatus.Playing, numberOfPlayers: "3/4" },
    { id: "room-3", name: "Untitled-3", status: RoomStatus.WaitingForSignUp, numberOfPlayers: "3/4" },
  ]
})