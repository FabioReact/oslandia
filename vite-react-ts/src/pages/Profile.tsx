import { useContext, useState } from 'react'
import { AuthContext } from '../context/auth-context'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { changeTheme, getTheme } from '../redux/reducers/themeSlice'

const Profile = () => {
  const userContext = useContext(AuthContext)
  const theme = useAppSelector(getTheme)
  const [bgColor, setBgColor] = useState(theme.backgroundColor)
  const [textColor, setTextColor] = useState(theme.textColor)
  const dispatch = useAppDispatch()

  const onSave = () => {
    dispatch(
      changeTheme({
        backgroundColor: bgColor,
        textColor,
      }),
    )
  }

  return (
    <section>
      <h1>Profile</h1>
      <p>{userContext.connected ? 'You are logged in' : 'You must log in'}</p>
      <p>Username: {userContext.username}</p>
      <p>{JSON.stringify(theme)}</p>
      <label htmlFor='bgColor'>Background</label>
      <input
        type='color'
        name='bgColor'
        id='bgColor'
        value={bgColor}
        onChange={(event) => {
          setBgColor(event.target.value)
        }}
      />
      <label htmlFor='textColor'>Text</label>
      <input
        type='color'
        name='textColor'
        id='textColor'
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />
      <button onClick={onSave}>Save</button>
    </section>
  )
}

export default Profile
