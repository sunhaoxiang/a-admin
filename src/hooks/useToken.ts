import { useUserInfoStore } from '@/stores'

const useToken = () => {
  const userInfo = useUserInfoStore(state => state.userInfo)

  return userInfo?.token
}

export default useToken
