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
    <section className='flex flex-col items-center'>
      <h1 className='uppercase text-4xl font-light tracking-widest'>Heroes List</h1>
      <ul className='flex justify-center gap-2 cursor-pointer font-semibold py-6'>
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
      <div className='flex flex-wrap gap-4 justify-center'>
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
