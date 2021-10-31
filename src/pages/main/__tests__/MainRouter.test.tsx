import { createMemoryHistory } from "history"
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"
import React from "react"
import { MainRouter } from "../MainRouter"

jest.mock("../../game-lobby/GameLobbyPage", () => ({
  GameLobbyPage: () => <>GameLobbyPage</>
}))

jest.mock("../../../GameCanvas", () => ({
  GameCanvas: () => <>GameCanvas</>
}))

describe("MainRouter", () => {
  it("show hello world when redirect to / path", () => {
    const history = createMemoryHistory()
    history.push("/")
    const { getByText } = render(
      <Router history={history}>
        <MainRouter/>
      </Router>
    )

    expect(getByText("Hello world clicked")).toBeInTheDocument()
  })

  it("show login when redirect to /login path", () => {
    const history = createMemoryHistory()
    history.push("/login")
    const { getByText } = render(
      <Router history={history}>
        <MainRouter/>
      </Router>
    )

    expect(getByText("Login clicked")).toBeInTheDocument()
  })

  it("show game-lobby when redirect to /game-lobby path", () => {
    const history = createMemoryHistory()
    history.push("/game-lobby")
    const { getByText } = render(
      <Router history={history}>
        <MainRouter/>
      </Router>
    )

    expect(getByText("GameLobbyPage")).toBeInTheDocument()
  })

  it("show game when redirect to /game path", () => {
    const history = createMemoryHistory()
    history.push("/game")
    const { getByText } = render(
      <Router history={history}>
        <MainRouter/>
      </Router>
    )

    expect(getByText("GameCanvas")).toBeInTheDocument()
  })
})