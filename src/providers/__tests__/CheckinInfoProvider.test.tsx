import React from "react"
import * as ReactRouterDom from "react-router-dom"
import {CheckinInfoProvider, useCheckinInfo} from "../CheckinInfoProvider"
import {render, waitFor} from "@testing-library/react"
import * as API from "../../services/api"
import {MemoryRouter} from "react-router-dom"

jest.mock("../CredentialProvider", () => ({
  ...jest.requireActual("../CredentialProvider"),
  useCredential: jest.fn(),
}))

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: jest.fn()
}))

const InnerComponent: React.FC = (): React.ReactElement => {
  const { passengers } = useCheckinInfo()
  return <>
    <span>Inner Component</span>
    <span>{ passengers.join("") }</span>
  </>
}

const TestableCheckinInfoProvider: React.FC = (): React.ReactElement =>
  <MemoryRouter>
    <CheckinInfoProvider>
      <InnerComponent/>
    </CheckinInfoProvider>
  </MemoryRouter>

describe("CheckinInfoProvider", () => {
  const mockedHistory: any = {
    push: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(ReactRouterDom, "useHistory")
      .mockReturnValue(mockedHistory)
  })

  it("should be able to render", () => {
    expect(() => render(<TestableCheckinInfoProvider/>)).not.toThrow()
  })

  it("should redirect to login page when failed to get checkin info", async () => {
    jest.spyOn(API, "getCheckinInfo")
      .mockRejectedValue(new Error())

    render(<TestableCheckinInfoProvider/>)

    await waitFor(() => expect(mockedHistory.push).toHaveBeenCalledWith("/checkin"))
  })

  it("should be able to access passengers when success to get checkin info", async () => {
    jest.spyOn(API, "getCheckinInfo")
      .mockResolvedValue({ success: true })

    const { getByText } = render(<TestableCheckinInfoProvider/>)

    await waitFor(() => expect(getByText("abcd")).toBeInTheDocument())
  })
})
