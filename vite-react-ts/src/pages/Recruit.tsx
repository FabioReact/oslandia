/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAddHeroMutation } from '../redux/api'
import { createHero } from '../utils/createHero'

type Inputs = {
  name: string
  fullname: string
  intelligence: string
  strength: string
  speed: string
  durability: string
  power: string
  combat: string
}

const Recruit = () => {
  const [mutation, { data }] = useAddHeroMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData)
    void mutation(createHero(formData))
  }
  console.log(errors)
  return (
    <section>
      <h1>Recruit</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input
            className='border-b border-black'
            id='name'
            {...register('name', { required: true, pattern: /^[A-Za-z\s]+$/i })}
          />
          {errors.name && <span>This field is required</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='fullname'>Real name</label>
          <input
            className='border-b border-black'
            id='fullname'
            {...register('fullname', { required: true, pattern: /^[A-Za-z\s]+$/i })}
          />
          {errors.fullname && <span>This field is required</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='intelligence'>Intelligence</label>
          <input
            className='border-b border-black'
            id='intelligence'
            type='range'
            {...register('intelligence', { required: true, min: 0, max: 100 })}
          />
          {errors.intelligence && <span>This field is required</span>}
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Recruit
