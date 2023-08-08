import Axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { storage } from '@/utils'

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = storage.getToken()

  if (token) config.headers.token = `token`

  return config
})

axios.interceptors.response.use(
  config => {
    const { data } = config
    if (data.code === 0) {
      return data.data
    } else {
      message.error(data.message)
      if (data.code === 401) storage.clearToken()

      return Promise.reject(data)
    }
  },
  error => {
    const message = error.response?.data?.message || error.message
    console.error(message)

    return Promise.reject(error)
  }
)
