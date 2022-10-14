import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import { useAppSelector } from '../redux/hooks'
import { getTheme } from '../redux/reducers/themeSlice'

const Layout = () => {
  const theme = useAppSelector(getTheme)
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
      className='min-h-screen flex flex-col'
    >
      <NavBar />
      <Outlet />
      <footer className='mt-auto'>Copyright 2022</footer>
    </div>
  )
}

// Enregistrer

export default Layout
