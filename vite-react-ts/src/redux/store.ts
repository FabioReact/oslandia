import { configureStore } from '@reduxjs/toolkit'
import { heroesApi } from './api'
import citiesReducer from './reducers/citiesSlice'

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heroesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
