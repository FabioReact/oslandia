import { Hero } from '../types/hero'

export const createHero = ({
  name,
  fullname,
  intelligence,
}: {
  name: string
  fullname: string
  intelligence: string
}): Hero => {
  return {
    id: '',
    name,
    powerstats: {
      intelligence,
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: '',
    },
    biography: {
      'full-name': fullname,
      'alter-egos': '',
      aliases: [],
      'place-of-birth': '',
      'first-appearance': '',
      publisher: '',
      alignment: '',
    },
    appearance: {
      gender: '',
      race: '',
      height: [],
      weight: [],
      'eye-color': '',
      'hair-color': '',
    },
    work: {
      occupation: '',
      base: '',
    },
    connections: {
      'group-affiliation': '',
      relatives: '',
    },
    image: {
      url: '',
    },
  }
}
