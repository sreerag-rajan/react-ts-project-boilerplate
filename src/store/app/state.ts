import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAppState {
  isAuthenticated: boolean
}

const initialState: IAppState = {
  isAuthenticated: false,
}

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state ) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    }
  },
})


export const { authenticate, logout } = appReducer.actions

export default appReducer.reducer