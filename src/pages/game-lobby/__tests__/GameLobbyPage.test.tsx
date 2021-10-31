import React from "react"
import { act, render } from "@testing-library/react"
import { GameLobbyPage } from "../GameLobbyPage"
import { GameService } from "../../../services/game-service"

jest.mock("../components/GameLobby", () => ({
  GameLobby: () => <>GameLobby</>
}))

describe("GameLobbyPage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(GameService, "getRooms")
      .mockResolvedValue([])
  })

  it("should render create room button", async () => {
    const { findByRole } = render(<GameLobbyPage/>)

    expect(await findByRole("button")).toBeInTheDocument()
  })

  it("should render without crashing", () => {
    act(() => {
      render(<GameLobbyPage/>)
    })
  })

  it("should call api correctly", () => {
    act(() => {
      render(<GameLobbyPage/>)
    })

    expect(GameService.getRooms).toHaveBeenCalled()
  })

  it("should render GameLobby", () => {
    let getByText: any = null
    act(() => {
      getByText = render(<GameLobbyPage/>).getByText
    })

    expect(getByText(/GameLobby/)).toBeInTheDocument()
  })
})