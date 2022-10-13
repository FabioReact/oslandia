import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import createRoutes from './Routes'
import { Suspense, useState } from 'react'
import { AuthContext } from './context/auth-context'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const queryClient = new QueryClient()

const router = createBrowserRouter(createRoutesFromElements(createRoutes()))

function App() {
  const [connected, setConnected] = useState(false)
  const [username, setUsername] = useState('')

  const login = (username: string, password: string) => {
    if (username === 'Fabio' && password === 'secret') {
      setConnected(true)
      setUsername('Fabio')
    }
  }

  const logout = () => {
    setConnected(false)
    setUsername('')
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Chargement...</div>}>
        <Provider store={store}>
          <AuthContext.Provider
            value={{
              connected,
              username,
              login,
              logout,
            }}
          >
            <RouterProvider router={router} />
          </AuthContext.Provider>
        </Provider>
      </Suspense>
    </QueryClientProvider>
  )
}

export { App }
