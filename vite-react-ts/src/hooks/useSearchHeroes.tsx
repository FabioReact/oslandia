import { useEffect, useReducer } from 'react'
import { getHeroesByLetter } from '../api/heroes'
import { ActionType, heroesReducer } from '../reducers/heroesReducer'
import { Hero } from '../types/hero'

const initialState = {
  heroes: [],
  loading: true,
  error: false,
  errorMessage: '',
}

const useSearchHeroes = (letter: string) => {
  const [state, dispatch] = useReducer(heroesReducer, initialState)
  const { error, loading, heroes, errorMessage } = state

  const searchHeroesByletter = (letter: string) => {
    getHeroesByLetter(letter)
      .then((data: Hero[]) => {
        dispatch({
          type: ActionType.SET_HEROES,
          heroes: data,
        })
      })
      .catch((err) => {
        dispatch({
          type: ActionType.SET_ERROR,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          errorMessage: err.message as string,
        })
      })
  }

  useEffect(() => {
    searchHeroesByletter(letter)
  }, [])

  const onSearchHero = (letter: string) => {
    dispatch({ type: ActionType.LOADING })
    searchHeroesByletter(letter)
  }

  return {
    heroes,
    loading,
    error,
    errorMessage,
    onSearchHero,
  }
}

export { useSearchHeroes }
