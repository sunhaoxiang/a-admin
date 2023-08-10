import { useRoutes } from 'react-router-dom'
import { rootRoutes } from './routes'

const Router = () => {
  const routes = useRoutes(rootRoutes)

  return routes
}

export default Router
