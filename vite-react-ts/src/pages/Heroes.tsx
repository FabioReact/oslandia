import { useEffect, useState } from 'react'
import { getHeroes } from '../api/heroes'
import Spinner from '../components/Spinner/Spinner'
import { Hero } from '../types/hero'

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getHeroes()
      .then((data: Hero[]) => {
        console.log(data)
        setError(false)
        setHeroes(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(true)
      })
  }, [])

  return (
    <section>
      <h1>Heroes List</h1>
      {error && <p>Houston, we have a problem</p>}
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
