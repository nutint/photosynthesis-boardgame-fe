import React from "react"
import { render } from "@testing-library/react"
import { AppProvider } from "../AppProvider"

const SandboxComponent: React.FC = (): React.ReactElement => {
  return <>Sandbox Component</>
}
describe("AppProvider", () => {
  it("should be able to render with child component", () => {
    render(<AppProvider><SandboxComponent/></AppProvider>)
  })

  it("should be able to render sandbox component correctly", () => {
    const { getByText } = render(<AppProvider><SandboxComponent/></AppProvider>)

    expect(getByText(/Sandbox Component/)).toBeInTheDocument()
  })
})