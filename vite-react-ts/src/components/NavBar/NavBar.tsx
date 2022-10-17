import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
      to: '/battle',
      label: 'Battle',
    },
    {
      to: '/recruit',
      label: 'Recruit',
    },
    {
      to: 'search',
      label: 'Search',
    },
    {
      to: 'profile',
      label: 'Profile',
    },
  ]
  return (
    <nav className='pb-6'>
      <ul className='flex justify-center gap-4 font-semibold text-lg py-1'>
        {arrayOfLi.map((link) => (
          <li key={link.to}>
            <NavLink
              end={link.end}
              to={link.to}
              className={({ isActive }) => (isActive ? 'text-red-600' : '')}
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
  )
}

export default NavBar
