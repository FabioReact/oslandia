import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Hero } from '../types/hero'

export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:4000/' }),
  endpoints: (builder) => ({
    getHeroById: builder.query<Hero, number>({
      query: (id) => `heroes/${id}`,
    }),
    getHeroByName: builder.query<Hero[], string>({
      query: (name) => `heroes?name_like=${name}`,
    }),
  }),
})

export const { useGetHeroByIdQuery, useGetHeroByNameQuery } = heroesApi
