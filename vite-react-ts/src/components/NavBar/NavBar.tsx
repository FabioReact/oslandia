import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

const NavBar = () => {
  const { connected, logout } = useContext(AuthContext)
  const arrayOfLi = [
    {
      to: '/',
      label: 'Home',
      end: true,
    },
    {
      to: 'counter',
      label: 'Counter',
    },
    {
      to: 'cities',
      label: 'Cities',
    },
    {
      to: 'change-background',
      label: 'Background',
    },
    {
      to: 'heroes',
      label: 'Heroes',
    },
    {
      to: 'profile',
      label: 'Profile',
    },
  ]
  return (
    <>
      <nav>
        <ul className='flex justify-center gap-4 font-semibold text-lg my-1'>
          {arrayOfLi.map((link) => (
            <li key={link.to}>
              <NavLink
                end={link.end}
                to={link.to}
                style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {connected ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <NavLink to='login' style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}>
              Login
            </NavLink>
          )}
        </ul>
      </nav>
      <Outlet />
      {/* <footer>Copyright 2022</footer> */}
    </>
  )
}

export default NavBar
