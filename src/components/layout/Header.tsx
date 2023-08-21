import { Layout } from 'antd'
import { useUserInfoStore } from '@/stores'
import type { CSSProperties } from 'react'

const { Header: AntdHeader } = Layout

export const headerStyle: CSSProperties = {
  height: 64
}

const Header = () => {
  const userInfo = useUserInfoStore(state => state.userInfo)

  return (
    <AntdHeader>
      <div className="text-right text-white">Welcome, {userInfo?.email}</div>
    </AntdHeader>
  )
}

export default Header
