import { Hero } from '../types/hero'
import { BASE_URL, fetcher } from './fetcher'

const getHeroes = (): Promise<Hero[]> => {
  return fetcher.get<Hero[]>(`${BASE_URL}/heroes`)
}

export { getHeroes }
