import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Hero } from '../types/hero'

export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getHeroById: builder.query<Hero, number>({
      query: (id) => `heroes/${id}`,
    }),
    getAllHeroes: builder.query<Hero[], void>({
      query: () => `heroes`,
    }),
    getHeroByName: builder.query<Hero[], string>({
      query: (name) => `heroes?name_like=${name}`,
    }),
    addHero: builder.mutation<Hero, Hero>({
      query: (hero) => ({
        url: 'heroes',
        method: 'POST',
        body: hero,
      }),
    }),
  }),
})

export const {
  useGetHeroByIdQuery,
  useGetHeroByNameQuery,
  useLazyGetHeroByNameQuery,
  useGetAllHeroesQuery,
  useAddHeroMutation,
} = heroesApi
