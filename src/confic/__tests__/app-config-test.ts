import { loadAppConfig } from "../app-config"

describe("loadAppConfig", () => {
  process.env.REACT_APP_MOCK_RESPONSE = "true"

  it("should be able to load MOCK_API variable", () => {
    expect(loadAppConfig()?.mockedResponse).toEqual(true)
  })
})