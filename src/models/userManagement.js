//@flow

export type LoginInfo = {
  login: string,
  password: string,
  timestamp: string
}

export type AuthInfo = {
  repId: number,
  userName: string,
  privateKey: string,
  publicKey: string,
  access_token: string,
  refresh_token: string
}

export type UserManagementState = {
  authenticated: boolean,
  authenicationError: string,
  authInfo: AuthInfo,
  incidentCount: number,
  changeCount: number,
  changeCount: number
}

export type TokenRequest = {
  username: string,
  password: string,
  grant_type: string,
  refresh_token: string,
  invalid_grant: string
}

export type TokenResponse = {
  access_token: string,
  token_type: string,
  expires_in: number,
  refresh_token: string,
  userName: string,
  repId: number
}
