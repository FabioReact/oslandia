import { Await, defer, LoaderFunction, useLoaderData } from 'react-router-dom'
import { getHeroById } from '../api/heroes'
import HeroCard from '../components/HeroCard/HeroCard'
import Spinner from '../components/Spinner/Spinner'
import { Suspense } from 'react'
import { Hero } from '../types/hero'

type LoaderData = {
  data: ReturnType<typeof getHeroById>
}

const HeroDetails = () => {
  const { data } = useLoaderData() as LoaderData

  return (
    <section>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(resolvedData: Hero) => <HeroCard hero={resolvedData} />}
          {/* <h1>Hero id: {data.id}</h1> */}
          {/* {isError && <p>Houston, we have a problem: {JSON.stringify(error)}</p>} */}
          {/* {isLoading && <Spinner />} */}
          {/* {data && <HeroCard hero={data} />} */}
          {/* <HeroCard hero={data} /> */}
        </Await>
      </Suspense>
    </section>
  )
}

const heroDetailsLoader: LoaderFunction = ({ params }) => {
  const id = +(params.id || '0')
  const data = getHeroById(id)
  return defer({ data })
}

export { HeroDetails as default, heroDetailsLoader }
