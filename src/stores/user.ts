import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserInfo } from '@/types/user'

interface userInfoState {
  userInfo: UserInfo | null
  setUserInfo: (info: UserInfo) => void
}

const useUserInfoStore = create<userInfoState>()(
  persist(
    set => ({
      userInfo: null,
      setUserInfo: info => set(() => ({ userInfo: info }))
    }),
    {
      name: 'userInfo'
    }
  )
)

export default useUserInfoStore
