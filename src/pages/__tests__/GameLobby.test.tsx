import React from "react"
import { render } from "@testing-library/react"
import { PlayerSignup } from "../PlayerSignup"

describe("GameLobby", () => {
  it("should be able to render without error", () => {
    render(<PlayerSignup />)
  })

  it("should contains player name field", () => {
    const { getByRole } = render(<PlayerSignup/>)

    expect(getByRole("textbox", { name: "Player name:"}))
      .toBeInTheDocument()
  })

  it("should contain select for player color", () => {
    const { getByRole } = render(<PlayerSignup/>)

    expect(getByRole("option"))
      .toBeInTheDocument()
  })
})