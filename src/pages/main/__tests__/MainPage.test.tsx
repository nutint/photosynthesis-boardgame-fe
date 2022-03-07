import React from "react"
import { act, fireEvent, getByRole, render } from "@testing-library/react"
import * as ReactRouterDom from "react-router-dom"

import { MainPage } from "../MainPage"
import {MemoryRouter} from "react-router-dom"

jest.mock("../MainRouter", () => ({
  MainRouter: () => <>MainRouter</>
}))
const mockedHistory: any = {
  push: jest.fn()
}
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: jest.fn()
}))

const TestableMainPage: React.FC = (): React.ReactElement => {
  return <MemoryRouter>
    <MainPage/>
  </MemoryRouter>
}

describe("MainPage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(ReactRouterDom, "useHistory")
      .mockReturnValue(mockedHistory)
  })

  it("should render without crashing", () => {
    render(<TestableMainPage/>)
  })

  describe("Home Page button", () => {
    it("should render Home Page button", () => {
      const { getByRole } = render(<TestableMainPage/>)

      expect(getByRole("button")).toHaveTextContent("Home Page")
    })

    it("should push correctly when click at Home Page button", () => {
      const { getByRole } = render(<TestableMainPage/>)

      act(() => {
        fireEvent.click(getByRole("button"))
      })

      expect(mockedHistory.push)
        .toHaveBeenCalledWith("/login")
    })

  })

  it("should render MainRouter", () => {
    const { getByText } = render(<TestableMainPage/>)

    expect(getByText(/MainRouter/))
  })
})
