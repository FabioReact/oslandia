/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addCity, deleteCity, getCities } from '../redux/reducers/citiesSlice'

type Inputs = {
  city: string
}

const Cities = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const cities = useAppSelector(getCities)
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    dispatch(
      addCity({
        id: Date.now(),
        name: data.city,
      }),
    )
  }

  const onDeleteCity = (id: number) => {
    console.log("Je souhaite supprimer la ville ayant l'id ", id)
    dispatch(deleteCity(id))
  }

  return (
    <section>
      <h1>Cities to visit</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          {...register('city', {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
        />
        {errors.city?.type === 'required' && <p>A city name is required</p>}
        <button>Add city</button>
      </form>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name} <button onClick={() => onDeleteCity(city.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cities
