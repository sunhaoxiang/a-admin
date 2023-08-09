import { axios } from '@/utils'
import type { LoginData, UserInfo, UserInfoRes } from '@/types/user'

export async function userLoginApi(data: LoginData): Promise<UserInfo> {
  return axios({
    url: '/login',
    method: 'get',
    params: data
  })
}

export async function userInfoApi(): Promise<UserInfoRes> {
  return axios({
    url: '/info',
    method: 'get'
  })
}
