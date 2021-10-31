import { createMemoryHistory } from "history"
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"
import React from "react"
import { MainRouter } from "../MainRouter"

describe("MainRouter", () => {
  const helloWorldLinkName = "Hello world"

  it(`show hello world happened when click at ${helloWorldLinkName}`, () => {
    const history = createMemoryHistory()
    history.push("/")
    const { getByText } = render(
      <Router history={history}>
        <MainRouter/>
      </Router>
    )

    expect(getByText("Hello world clicked")).toBeInTheDocument()
  })

  it(`show hello world happened when click at ${helloWorldLinkName}`, () => {
    const history = createMemoryHistory()
    history.push("/login")
    const { getByText } = render(
      <Router history={history}>
        <MainRouter/>
      </Router>
    )

    expect(getByText("Login clicked")).toBeInTheDocument()
  })
})