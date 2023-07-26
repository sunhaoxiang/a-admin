import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/pages/user/login/Login'
import NotFound from '@/pages/NotFound'

export const rootRouter = [
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

function Index() {
  const routes = useRoutes(rootRouter)

  return routes
}

export default Index
