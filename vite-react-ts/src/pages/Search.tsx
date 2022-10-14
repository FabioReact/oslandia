import React, { memo, useEffect, useState, useTransition } from 'react'
import HeroCard from '../components/HeroCard/HeroCard'
import Spinner from '../components/Spinner/Spinner'
import { useGetAllHeroesQuery } from '../redux/api'
import { Hero } from '../types/hero'

const HeroesList = ({ heroes }: { heroes: Hero[] }) => {
  return (
    <div className='flex flex-wrap gap-3 justify-center'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

const MemoizedHeroesList = memo(HeroesList)

const Search = () => {
  const { isLoading, isSuccess, data } = useGetAllHeroesQuery()
  const [isPending, startTransition] = useTransition()
  const [searchedHero, setSearchedHero] = useState('')
  const [filteredHeroes, setFilteredHeroes] = useState<Hero[]>([])

  useEffect(() => {
    if (isSuccess) setFilteredHeroes(data)
  }, [isSuccess])

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    const re = new RegExp(`${text}`, 'i')
    const heroesFiltered = data?.filter((hero) => hero.name.match(re)) || []
    setSearchedHero(text)
    startTransition(() => {
      // les mises à jour de l'état qui se trouve à l'intérieur de startTransition sont déclarées comme "non urgentes" et peuvent donc être interrompues
      setFilteredHeroes(heroesFiltered)
    })
  }

  return (
    <section className='flex flex-col items-center'>
      <h1>Search</h1>
      <fieldset>
        <label htmlFor='search'>Filter by name:</label>
        <input
          type='text'
          id='search'
          name='search'
          value={searchedHero}
          onChange={onChangeHandler}
        />
      </fieldset>
      {(isLoading || isPending) && <Spinner />}
      {isSuccess && <MemoizedHeroesList heroes={filteredHeroes} />}
    </section>
  )
}

export default Search
