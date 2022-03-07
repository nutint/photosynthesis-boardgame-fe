import { CredentialProvider, useCredential } from "../CredentialProvider"
import React from "react"
import {AppProvider} from "../AppProvider"
import {render} from "@testing-library/react"
import * as ReactRouterDom from "react-router-dom"
import {MemoryRouter} from "react-router-dom"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: jest.fn()
}))

const InnerComponent: React.FC = (): React.ReactElement => {
  const { bookingCredential } = useCredential()
  return <>
    <span>Inner Component</span>
    <span>{ bookingCredential }</span>
  </>
}

const mockedSessionStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
}

const TestableCredentialProvider: React.FC = (): React.ReactElement =>
  <AppProvider sessionStorage={mockedSessionStorage}>
    <MemoryRouter>
      <CredentialProvider>
        <InnerComponent/>
      </CredentialProvider>
    </MemoryRouter>
  </AppProvider>

describe("CredentialProvider", () => {
  const mockedHistory: any = {
    push: jest.fn()
  }

  beforeEach(() => {
    jest.spyOn(ReactRouterDom, "useHistory")
      .mockReturnValue(mockedHistory)
  })

  it("should be able to render", () => {
    expect(() => render(<TestableCredentialProvider/>)).not.toThrow()
  })

  it("should render content of render component", () => {
    const { getByText } = render(<TestableCredentialProvider/>)

    expect(getByText("Inner Component")).toBeInTheDocument()
  })

  it("should be able to access credential", () => {
    mockedSessionStorage.getItem.mockReturnValue("abcd")

    const { getByText } = render(<TestableCredentialProvider/>)

    expect(getByText("abcd")).toBeInTheDocument()
  })

  it("should redirect correctly when booking credential is null", () => {
    mockedSessionStorage.getItem.mockReturnValue(null)

    render(<TestableCredentialProvider/>)

    expect(mockedHistory.push).toHaveBeenCalledWith("/login")
  })
})
