import React, { useRef, useState } from 'react'
import HeroCard from '../components/HeroCard/HeroCard'
import { useLazyGetHeroByNameQuery } from '../redux/api'
import { Hero } from '../types/hero'

type HeroLabelProps = {
  hero: Hero
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function
}

const HeroLabel = ({ hero, onClick = () => null }: HeroLabelProps) => {
  return (
    <div onClick={onClick} className='cursor-pointer hover:bg-gray-100'>
      <p className='font-bold text-xl'>
        {hero.name} <span className='text-gray-600 text-base'>#{hero.id}</span>
      </p>
      <p className='text-lg mb-2'>{hero.biography['full-name']}</p>
    </div>
  )
}

const SelectHeroForm = ({
  selectHero,
  label = 'Number',
}: {
  selectHero: (hero: Hero) => any
  label?: string
}) => {
  // const [selectedHero, setSelectedHero] = useState(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [getHeroByName, { data, isLoading, error }] = useLazyGetHeroByNameQuery()

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const searchedHero = inputRef.current?.value || ''
    await getHeroByName(searchedHero)
  }

  if (data)
    return (
      <section>
        {data.map((hero) => (
          <HeroLabel key={hero.id} hero={hero} onClick={() => selectHero(hero)} />
        ))}
      </section>
    )

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor={`hero${label}`}>Select Hero {label}:</label>
        <input ref={inputRef} type='text' id={`hero${label}`} className='border-b border-black' />
        <button disabled={isLoading}>Search</button>
      </fieldset>
    </form>
  )
}

const Battle = () => {
  const [heroOne, setHeroOne] = useState(null)
  const [heroTwo, setHeroTwo] = useState(null)
  return (
    <section>
      <h1>Battle</h1>
      <div className='flex'>
        <div className='flex w-1/2 justify-center'>
          {!heroOne && <SelectHeroForm label='One' selectHero={setHeroOne} />}
          {heroOne && <HeroCard hero={heroOne} />}
        </div>
        <div className='flex w-1/2 justify-center'>
          {!heroTwo && <SelectHeroForm label='Two' selectHero={setHeroTwo} />}
          {heroTwo && <HeroCard hero={heroTwo} />}
        </div>
      </div>
      {heroOne && heroTwo && <button>Fight</button>}
    </section>
  )
}

export default Battle
