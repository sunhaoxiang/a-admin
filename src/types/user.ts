export interface LoginData {
  email: string
  passwd: string
}

export interface LoginRes {
  id: number
  email: string
  token: string
}

export interface UserInfoRes {
  id: number
  email: string
  role: string
}
