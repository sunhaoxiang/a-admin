import { useRoutes } from 'react-router-dom'
import { rootRouter } from './routes.tsx'

function Router() {
  return useRoutes(rootRouter)
}

export default Router
