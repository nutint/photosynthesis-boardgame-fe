import { CredentialProvider, useCredential } from "../CredentialProvider"
import React from "react"
import {AppProvider} from "../AppProvider"
import {render} from "@testing-library/react"

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
    <CredentialProvider>
      <InnerComponent/>
    </CredentialProvider>
  </AppProvider>

describe("CredentialProvider", () => {
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
})
