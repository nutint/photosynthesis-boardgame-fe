import React from "react"
import { render, screen } from "@testing-library/react"
import { App } from "./App"

jest.mock("./GameCanvas", () => ({
  GameCanvas: (): React.ReactElement => (<>Game Canvas</>)
}))

describe("App", () => {
  it("should render game canvas", () => {
    const { getByText } = render(<App/>)

    expect(getByText(/Game Canvas/)).toBeInTheDocument()
  })
})
