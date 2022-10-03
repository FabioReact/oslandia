import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ChangeBackground from './ChangeBackground'
import NavBar from './components/NavBar/NavBar'
import Counter from './pages/Counter'
import HeroDetails from './pages/HeroDetails'
import Heroes from './pages/Heroes'
import Home from './pages/Home'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route
            index
            element={
              <Home teacher='Fabio' course='React'>
                <p>Enfant</p>
              </Home>
            }
          />
          <Route path='counter' element={<Counter />} />
          <Route path='change-background' element={<ChangeBackground />} />
          <Route path='heroes' element={<Heroes />} />
          <Route path='heroes/:id' element={<HeroDetails />} />
        </Route>
        {/* <Route path='/admin' element={<NavBar />}>
          <Route path='change-background' element={<ChangeBackground />} />
        </Route> */}
      </Routes>
    </QueryClientProvider>
  )
}

export { App }
