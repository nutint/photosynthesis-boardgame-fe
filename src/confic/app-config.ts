export type AppConfig = {
  mockedResponse: boolean
}

export const loadAppConfig = (): AppConfig | null => ({
  mockedResponse: process.env.REACT_APP_MOCK_RESPONSE === "true"
})