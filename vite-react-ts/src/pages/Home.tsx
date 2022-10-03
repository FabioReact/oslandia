import classes from './home.module.css'

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
  children?: React.ReactNode
}

const Home = ({ teacher, course, children }: Props) => {
  return (
    <>
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
    </>
  )
}

export default Home
