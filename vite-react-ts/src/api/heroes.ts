import { Hero } from '../types/hero'
import { BASE_URL, fetcher } from './fetcher'

const getHeroes = (): Promise<Hero[]> => {
  return fetcher.get<Hero[]>(`${BASE_URL}/heroes`)
}

const getHeroesByLetter = (letter: string): Promise<Hero[]> => {
  return fetcher.get<Hero[]>(`${BASE_URL}/heroes?name_like=^${letter}`)
}

// http://localhost:4000/heroes/32

const getHeroById = (id: number): Promise<Hero> => {
  return fetcher.get<Hero>(`${BASE_URL}/heroes/${id}`)
}

export { getHeroes, getHeroesByLetter, getHeroById }
