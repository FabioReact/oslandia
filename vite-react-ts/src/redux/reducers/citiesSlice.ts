import { RootState } from './../store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type City = {
  id: number
  name: string
}

type CitiesState = {
  cities: City[]
}

const initialState: CitiesState = {
  cities: [
    {
      id: 1,
      name: 'Paris',
    },
  ],
}

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<City>) => {
      state.cities.push(action.payload)
    },
    deleteCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload)
    },
  },
})

export const { addCity, deleteCity } = citiesSlice.actions

export const getCities = (state: RootState) => state.cities.cities

export default citiesSlice.reducer
