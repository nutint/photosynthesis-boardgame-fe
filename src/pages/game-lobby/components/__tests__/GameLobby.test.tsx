import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { GameLobby } from "../GameLobby"
import { RoomStatus } from "../../../../model/RoomStatus"
import { RoomWithId } from "../../../../model/Room"

describe("GameLobby", () => {
  it("should render without crashing", () => {
    render(<GameLobby/>)
  })

  it("should render create room button", async () => {
    const { findByRole } = render(<GameLobby/>)

    expect(await findByRole("button")).toBeInTheDocument()
  })

  it("should call onClickCreateRoom function when click at create room", async () => {
    const onClickCreateRoom = jest.fn()
    const { findByRole } = render(<GameLobby onClickCreateRoom={onClickCreateRoom}/>)

    const button = await findByRole("button")
    fireEvent.click(button)

    expect(onClickCreateRoom).toHaveBeenCalled()
  })

  it("should render rooms correctly", () => {
    const rooms: RoomWithId[] = [
      { id: "room-1", name: "Room 1", status: RoomStatus.Playing, numberOfPlayers: "1/4" },
      { id: "room-2", name: "Room 2", status: RoomStatus.Starting, numberOfPlayers: "2/4" },
      { id: "room-3", name: "Room 3", status: RoomStatus.WaitingForSignUp, numberOfPlayers: "3/4" },
    ]

    const { getByText } = render(<GameLobby rooms={rooms}/>)

    expect(getByText(/Room 1/)).toBeInTheDocument()
    expect(getByText(/Room 2/)).toBeInTheDocument()
    expect(getByText(/Room 3/)).toBeInTheDocument()
  })
})