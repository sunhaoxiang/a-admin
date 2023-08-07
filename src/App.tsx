import { RouterProvider } from 'react-router-dom'
import useFixAntd from '@/hooks/useFixAntd.ts'
import router from '@/router'

function App() {
  useFixAntd()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
