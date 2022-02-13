import React from "react"
import { act, fireEvent, getByRole, render } from "@testing-library/react"
import * as ReactRouterDom from "react-router-dom"

import { MainPage } from "../MainPage"

jest.mock("../MainRouter", () => ({
  MainRouter: () => <>MainRouter</>
}))
const mockedHistory = {
  push: jest.fn()
}
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: jest.fn(() => mockedHistory)
}))

describe("MainPage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(ReactRouterDom, "useHistory")
      .mockReturnValue({
        push: jest.fn()
      } as any)
  })

  it("should render without crashing", () => {
    render(<MainPage/>)
  })

  describe("Home Page button", () => {
    it("should render Home Page button", () => {
      const { getByRole } = render(<MainPage/>)

      expect(getByRole("button")).toHaveTextContent("Home Page")
    })

    it("should push correctly when click at Home Page button", () => {
      const { getByRole } = render(<MainPage/>)

      act(() => {
        fireEvent.click(getByRole("button"))
      })

      expect(mockedHistory.push)
        .toHaveBeenCalledWith("/")
    })

  })

  it("should render MainRouter", () => {
    const { getByText } = render(<MainPage/>)

    expect(getByText(/MainRouter/))
  })
})