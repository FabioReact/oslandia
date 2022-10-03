import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getHeroById } from '../api/heroes'
import HeroCard from '../components/HeroCard/HeroCard'
import { Hero } from '../types/hero'
import Spinner from '../components/Spinner/Spinner'

const HeroDetails = () => {
  const params = useParams()
  const id = params.id || 0
  const { data, isError, isLoading, error } = useQuery(['getHero', id], () => getHeroById(+id))

  return (
    <section>
      <h1>Hero id: {id}</h1>
      {isError && <p>Houston, we have a problem: {JSON.stringify(error)}</p>}
      {isLoading && <Spinner />}
      {data && <HeroCard hero={data} />}
    </section>
  )
}

export default HeroDetails
