import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import HeroCard from '../components/HeroCard/HeroCard'
import Spinner from '../components/Spinner/Spinner'
import { useSearchHeroes } from '../hooks/useSearchHeroes'

const Heroes = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchedLetter = searchParams.get('q') || 'A'
  const { heroes, loading, error, errorMessage, onSearchHero } = useSearchHeroes(searchedLetter)

  const arrayOfLetters = []

  for (let index = 65; index <= 90; index++) {
    arrayOfLetters.push(String.fromCharCode(index))
  }

  useEffect(() => {
    onSearchHero(searchedLetter)
  }, [searchedLetter])

  const onSelectLetter = (letter: string) => {
    setSearchParams(`?q=${letter}`)
  }

  return (
    <section>
      <h1>Heroes List</h1>
      <ul className='flex justify-center gap-2 cursor-pointer'>
        {arrayOfLetters.map((letter, index) => (
          <li
            className={searchedLetter === letter ? 'text-red-600' : undefined}
            onClick={() => onSelectLetter(letter)}
            key={index}
          >
            {letter}
          </li>
        ))}
      </ul>
      {error && <p>Houston, we have a problem: {errorMessage}</p>}
      {!error && loading && <Spinner />}
      <div className='flex flex-wrap gap-4'>
        {heroes.map((hero) => (
          <Link key={hero.id} to={hero.id}>
            <HeroCard hero={hero} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Heroes
