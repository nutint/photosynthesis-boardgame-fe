import React from "react"
import { render } from "@testing-library/react"

import { App } from "./App"

jest.mock("./pages/main/MainPage", () => ({
  MainPage: (): React.ReactElement => (<>MainPage</>)
}))

describe("App", () => {
  it.skip("should render MainPage", () => {
    const { getByText } = render(<App/>)

    expect(getByText(/MainPage/)).toBeInTheDocument()
  })
})
