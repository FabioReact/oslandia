import Spinner from '../components/Spinner/Spinner'
import { useSearchHeroes } from '../hooks/useSearchHeroes'

const Heroes = () => {
  const { heroes, loading, error, errorMessage } = useSearchHeroes()

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
