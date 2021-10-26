export interface JwtResponse {
  user: {
    id: string,
    name: string,
    email: string,
    access_token: string,
    expires_in: string
}
}
