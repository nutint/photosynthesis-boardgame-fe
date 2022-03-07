import { LoginPage } from "./LoginPage"
import React from "react"
import {fireEvent, render, waitFor } from "@testing-library/react"
import * as ReactRouterDom from "react-router-dom"
import * as API from "../services/api"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: jest.fn(),
}))

jest.mock("../services/api", () => ({
  ...jest.requireActual("../services/api"),
  login: jest.fn(),
}))

const TestableLoginPage = () => <ReactRouterDom.MemoryRouter>
  <LoginPage/>
</ReactRouterDom.MemoryRouter>

describe("LoginPage", () => {

  const mockedHistory = {
    push: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(ReactRouterDom, "useHistory")
      .mockReturnValue(mockedHistory as any)
    jest.spyOn(API, "login")
      .mockResolvedValue({
        bookingCredential: "bookingCredential"
      })
  })

  it("should be able to render", () => {
    expect(() => render(<TestableLoginPage/>)).not.toThrow()
  })

  it("should render login button", () => {
    const { getByRole } = render(<TestableLoginPage/>)

    const loginButton = getByRole("button", { name: "Login" })

    expect(loginButton).toBeInTheDocument()
  })

  it("should call login api when click at login", () => {
    const { getByRole } = render(<TestableLoginPage/>)

    const loginButton = getByRole("button", { name: "Login" })
    fireEvent.click(loginButton)

    expect(API.login).toHaveBeenCalledWith({
      username: "username",
      password: "password"
    })
  })

  it("should redirect correctly when click login button", async () => {
    const { getByRole } = render(<TestableLoginPage/>)

    const loginButton = getByRole("button", { name: "Login" })
    fireEvent.click(loginButton)

    const credential = {
      username: "username",
      password: "password"
    }
    await waitFor(() => expect(mockedHistory.push)
      .toHaveBeenCalledWith("/checkin/flights-and-passengers", credential))
  })
})
