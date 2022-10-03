import { useState } from 'react'
import classes from './App.module.css'
import ChangeBackground from './ChangeBackground'
import Counter from './pages/Counter'
import Heroes from './pages/Heroes'

const styles = {
  red: {
    color: 'red',
  },
  bgBlue: {
    backgroundColor: 'blue',
  },
}

type Props = {
  teacher: string
  course: string
  children: React.ReactNode
}

function App({ teacher, course, children }: Props) {
  const [activeRoute, setActiveRoute] = useState<string | null>(null)
  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setActiveRoute('counter')}>Counter</li>
          <li onClick={() => setActiveRoute('changeBackground')}>Background</li>
          <li onClick={() => setActiveRoute('heroes')}>Heroes</li>
        </ul>
      </nav>
      <h1 style={styles.red} className='text-center'>
        Learn {course}
      </h1>
      <h2 style={styles.bgBlue} className={classes.textWhite}>
        With {teacher}
      </h2>
      {children}
      {children}
      {children}
      <p className='textWhite'>Test</p>
      {activeRoute === 'counter' && <Counter />}
      {activeRoute === 'changeBackground' && <ChangeBackground />}
      {activeRoute === 'heroes' && <Heroes />}
    </>
  )
}

export { App }
