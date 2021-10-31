import React from "react"
import { getByRole, render } from "@testing-library/react"

import { MainPage } from "../MainPage"

jest.mock("../MainRouter", () => ({
  MainRouter: () => <>MainRouter</>
}))

describe("MainPage", () => {
  it("should render without crashing", () => {
    render(<MainPage/>)
  })

  it("should render Login button", () => {
    const { getByRole } = render(<MainPage/>)

    expect(getByRole("button")).toBeInTheDocument()
  })

  it("should render MainRouter", () => {
    const { getByText } = render(<MainPage/>)

    expect(getByText(/MainRouter/))
  })
})