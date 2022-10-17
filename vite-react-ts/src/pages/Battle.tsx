import React, { useRef, useState } from 'react'
import HeroCard from '../components/HeroCard/HeroCard'
import { useLazyGetHeroByNameQuery } from '../redux/api'
import { Hero } from '../types/hero'
import { fight } from '../utils/fight'

type HeroLabelProps = {
  hero: Hero
  onClick?: (event: React.MouseEvent) => void
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
  selectHero: React.Dispatch<React.SetStateAction<Hero>>
  label?: string
}) => {
  // const [selectedHero, setSelectedHero] = useState(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [getHeroByName, { data, isLoading }] = useLazyGetHeroByNameQuery()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const searchedHero = inputRef.current?.value || ''
    void getHeroByName(searchedHero)
  }

  if (data && data.length)
    return (
      <section>
        {data.map((hero) => (
          <HeroLabel key={hero.id} hero={hero} onClick={() => selectHero(hero)} />
        ))}
      </section>
    )

  return (
    <form onSubmit={onSubmit}>
      <fieldset className='flex flex-col'>
        <label htmlFor={`hero${label}`}>Select Hero {label}:</label>
        <input ref={inputRef} type='text' id={`hero${label}`} className='border-b border-black' />
        {data?.length === 0 && <span className=' text-red-600 text-sm'>No results found</span>}
      </fieldset>
      <button className='mt-2' disabled={isLoading}>
        Search
      </button>
    </form>
  )
}

const Battle = () => {
  const [winner, setWinner] = useState<Hero | null>(null)
  const [heroOne, setHeroOne] = useState<Hero>(null as unknown as Hero)
  const [heroTwo, setHeroTwo] = useState<Hero>(null as unknown as Hero)
  const onFight = () => {
    setWinner(fight(heroOne, heroTwo))
  }
  return (
    <section className='text-center'>
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
      {heroOne && heroTwo && <button onClick={onFight}>Fight</button>}
      {winner && <p>Winner is {winner?.name}</p>}
    </section>
  )
}

export default Battle
