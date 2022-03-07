import React from "react"
import {fireEvent, render} from "@testing-library/react"
import { AppProvider, useAppProvider } from "../AppProvider"

const SandboxComponent: React.FC = (): React.ReactElement => {
  const { setSessionStorage, getSessionStorage } = useAppProvider()

  const fooResult = getSessionStorage("Foo")
  return <>
    Sandbox Component
    <span>{fooResult}</span>
    <button onClick={() => setSessionStorage("Foo", { foo: "bar" })}>Set Item</button>
  </>
}
describe("AppProvider", () => {
  const sessionStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
  }

  const TestableAppProvider = (mockedSessionStorage: any) =>
    <AppProvider sessionStorage={mockedSessionStorage}><SandboxComponent/></AppProvider>

  it("should be able to render with child component", () => {
    expect(() => render(TestableAppProvider(sessionStorage))).not.toThrow()
  })

  it("should be able to render sandbox component correctly", () => {
    const { getByText } = render(TestableAppProvider(sessionStorage))

    expect(getByText(/Sandbox Component/)).toBeInTheDocument()
  })

  it("should set item correct when click at setItem", () => {
    const { getByRole } = render(TestableAppProvider(sessionStorage))

    const setItemButton = getByRole("button", { name: "Set Item" })

    fireEvent.click(setItemButton)

    expect(sessionStorage.setItem).toHaveBeenCalledWith("Foo", { foo: "bar" } )
  })

  it("should get item correct when render", () => {
    const { getByRole } = render(TestableAppProvider(sessionStorage))

    const setItemButton = getByRole("button", { name: "Set Item" })

    fireEvent.click(setItemButton)

    expect(sessionStorage.getItem).toHaveBeenCalledWith("Foo")
  })

  it("should render foo result correctly", () => {
    sessionStorage.getItem.mockReturnValue("Foo Result")

    const { getByText } = render(TestableAppProvider(sessionStorage))

    expect(getByText("Foo Result")).toBeInTheDocument()
  })
})
