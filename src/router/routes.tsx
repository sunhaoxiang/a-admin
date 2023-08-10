import { Navigate } from 'react-router-dom'
import Login from '@/pages/user/login/Login.tsx'
import NotFound from '@/pages/NotFound.tsx'

export const rootRoutes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace={true} />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: 'Login',
      key: 'login',
      auth: false
    }
  },
  {
    path: '/404',
    element: <NotFound />,
    meta: {
      title: 'Not Found',
      key: 'notfound',
      auth: false
    }
  },
  {
    path: '*',
    element: <Navigate to="/404" replace={true} />
  }
]
