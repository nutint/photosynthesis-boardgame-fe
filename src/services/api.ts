
type LoginResult = {
  bookingCredential: string
}

type LoginCredential = {
  username: string,
  password: string
}

export const login = async (loginCredential: LoginCredential): Promise<LoginResult> => {
  return {
    bookingCredential: ""
  }
}
