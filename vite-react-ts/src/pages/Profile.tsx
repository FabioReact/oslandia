import { useContext } from 'react'
import { AuthContext } from '../context/auth-context'

const Profile = () => {
  const userContext = useContext(AuthContext)
  return (
    <section>
      <h1>Profile</h1>
      <p>{userContext.connected ? 'You are logged in' : 'You must log in'}</p>
      <p>Username: {userContext.username}</p>
    </section>
  )
}

export default Profile
