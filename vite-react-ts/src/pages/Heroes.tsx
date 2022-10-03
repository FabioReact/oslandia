import { useEffect, useReducer } from 'react'
import { getHeroes } from '../api/heroes'
import Spinner from '../components/Spinner/Spinner'
import { ActionType, heroesReducer } from '../reducers/heroesReducer'
import { Hero } from '../types/hero'

const initialState = {
  heroes: [],
  loading: true,
  error: false,
  errorMessage: '',
}

const Heroes = () => {
  const [state, dispatch] = useReducer(heroesReducer, initialState)
  const { error, loading, heroes, errorMessage } = state

  useEffect(() => {
    getHeroes()
      .then((data: Hero[]) => {
        dispatch({
          type: ActionType.SET_HEROES,
          heroes: data,
        })
      })
      .catch((err) => {
        console.error(err)
        dispatch({
          type: ActionType.SET_ERROR,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          errorMessage: err.message as string,
        })
      })
  }, [])

  return (
    <section>
      <h1>Heroes List</h1>
      {error && <p>Houston, we have a problem: {errorMessage}</p>}
      {!error && loading && <Spinner />}
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Heroes
