import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../context/auth-context'

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    // do stuff
    const username = usernameRef.current?.value || ''
    login(username, password)
  }

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <h1>Login</h1>
        <label htmlFor='username'>Username</label>
        <input ref={usernameRef} type='text' name='username' id='username' required />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <button>Login</button>
      </form>
    </section>
  )
}

export default Login
