import React from "react"
import { render } from "@testing-library/react"

import { App } from "./App"

jest.mock("./GameCanvas", () => ({
  GameCanvas: (): React.ReactElement => (<>Game Canvas</>)
}))
jest.mock("./pages/game-lobby/GameLobbyPage", () => ({
  GameLobbyPage: (): React.ReactElement => (<>Game Lobby Page</>)
}))

describe("App", () => {
  it("should render game canvas", () => {
    const { getByText } = render(<App/>)

    expect(getByText(/Game Canvas/)).toBeInTheDocument()
  })

  it("should render GameLobby", () => {
    const { getByText } = render(<App/>)

    expect(getByText(/Game Lobby Page/)).toBeInTheDocument()
  })
})
