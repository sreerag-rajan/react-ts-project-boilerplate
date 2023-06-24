import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/state'
import userReducer from './user/state'

export const store = configureStore({
  reducer: {
    app : appReducer,
    user: userReducer
  },
  devTools: true,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch