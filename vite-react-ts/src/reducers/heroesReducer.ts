import { Hero } from './../types/hero'

export enum ActionType {
  LOADING = 'LOADING',
  SET_HEROES = 'SET_HEROES',
  SET_ERROR = 'SET_ERROR',
}

type State = {
  heroes: Hero[]
  loading: boolean
  error: boolean
  errorMessage: string
}

type Action =
  | {
      type: ActionType.SET_HEROES
      heroes: Hero[]
    }
  | {
      type: ActionType.SET_ERROR
      errorMessage: string
    }
  | {
      type: ActionType.LOADING
    }

const heroesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        heroes: [],
        error: false,
        loading: true,
        errorMessage: '',
      }
    case ActionType.SET_HEROES:
      return {
        error: false,
        errorMessage: '',
        loading: false,
        heroes: action.heroes || [],
      }
    case ActionType.SET_ERROR:
      return {
        heroes: [],
        error: true,
        loading: false,
        errorMessage: action.errorMessage || '',
      }
    default:
      throw new Error('Not a valid reducer type')
  }
}

export { heroesReducer }
