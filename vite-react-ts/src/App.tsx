import { Routes, Route } from 'react-router-dom'
import ChangeBackground from './ChangeBackground'
import NavBar from './components/NavBar/NavBar'
import Counter from './pages/Counter'
import Heroes from './pages/Heroes'
import Home from './pages/Home'

function App() {
  return (
    <>
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
        </Route>
        {/* <Route path='/admin' element={<NavBar />}>
          <Route path='change-background' element={<ChangeBackground />} />
        </Route> */}
      </Routes>
    </>
  )
}

export { App }
