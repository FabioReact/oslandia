import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner/Spinner'
import { Hero } from '../types/hero'

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/heroes')
      .then((res) => res.json())
      .then((data: Hero[]) => {
        setHeroes(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <section>
      <h1>Heroes List</h1>
      {loading && <Spinner />}
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Heroes
