import { lazy } from 'react'
import { Route } from 'react-router-dom'
import ChangeBackground from './ChangeBackground'
import Layout from './hoc/Layout'
import Counter from './pages/Counter'
import { heroDetailsLoader } from './pages/HeroDetails'
import Heroes from './pages/Heroes'

const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))
const Profile = lazy(() => import('./pages/Profile'))
const Cities = lazy(() => import('./pages/Cities'))
const Login = lazy(() => import('./pages/Login'))
const HeroDetails = lazy(() => import('./pages/HeroDetails'))
const Battle = lazy(() => import('./pages/Battle'))
const Recruit = lazy(() => import('./pages/Recruit'))

const createRoutes = () => {
  return (
    <Route path='/' element={<Layout />}>
      <Route
        index
        element={
          <Home teacher='Fabio' course='React'>
            <p>Enfant</p>
          </Home>
        }
      />
      <Route path='counter' element={<Counter />} />
      <Route path='profile' element={<Profile />} />
      <Route path='login' element={<Login />} />
      <Route path='cities' element={<Cities />} />
      <Route path='change-background' element={<ChangeBackground />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='battle' element={<Battle />} />
      <Route path='recruit' element={<Recruit />} />
      <Route path='search' element={<Search />} />
      <Route path='heroes/:id' element={<HeroDetails />} loader={heroDetailsLoader} />
      {/* <Route path='/admin' element={<NavBar />}>
		<Route path='change-background' element={<ChangeBackground />} />
	</Route> */}
    </Route>
  )
}

export default createRoutes
