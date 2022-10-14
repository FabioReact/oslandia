import { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ThemeState = {
  backgroundColor: string
  textColor: string
}

const initialState: ThemeState = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeState>) => {
      state.backgroundColor = action.payload.backgroundColor
      state.textColor = action.payload.textColor
    },
  },
})

export const { changeTheme } = themeSlice.actions

export const getTheme = (state: RootState) => state.theme

export default themeSlice.reducer
