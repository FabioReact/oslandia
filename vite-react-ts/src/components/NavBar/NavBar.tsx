import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
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
      to: 'change-background',
      label: 'Background',
    },
    {
      to: 'heroes',
      label: 'Heroes',
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
        </ul>
      </nav>
      <Outlet />
      {/* <footer>Copyright 2022</footer> */}
    </>
  )
}

export default NavBar
