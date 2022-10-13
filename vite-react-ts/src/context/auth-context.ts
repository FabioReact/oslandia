/* eslint-disable @typescript-eslint/ban-types */
import { createContext } from 'react'

type AuthContextType = {
  connected: boolean
  username: string
  login: Function
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>(null as unknown as AuthContextType)
