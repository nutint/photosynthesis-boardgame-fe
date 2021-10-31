import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { GameLobby } from "../GameLobby"

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
})