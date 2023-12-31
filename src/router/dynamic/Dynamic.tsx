import { DashboardOutlined } from '@ant-design/icons'
import LayoutApp from '@/layout/LayoutApp'
import type { RouterObject } from '@/types/router'

const DashboardRouter: RouterObject[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      key: 'dashboard',
      icon: <DashboardOutlined />,
      index: 1
    },
    element: <LayoutApp />,
    children: [
      {
        path: 'index',
        element: <div>Dashboard</div>,
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: '/dashboard/upload',
        element: <div>Upload</div>,
        meta: {
          title: 'Upload'
        }
      }
    ]
  }
]

export default DashboardRouter
