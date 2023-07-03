import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ROLE } from './constants'

export interface IUserState {
  id: number
  uuid: string
  firstName: string
  lastName ?: string
  email: string
  role: keyof typeof ROLE | null
  isVerified: boolean
  profileImage?: string
}

const initialState: IUserState = {
  id: 0,
  uuid: '',
  firstName: '',
  lastName: '',
  email: '',
  role: null,
  isVerified: false,
}

export const userReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    //@ts-ignore
    setUser: (state, action: PayloadAction<any>) => {
      state = {
        id: action.payload.id,
        uuid: action.payload.uuid,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        role: action.payload.role,
        isVerified: action.payload.isVerified,
        profileImage: action.payload.profileImage,
      };
    },
  },
})


export const { setUser} = userReducer.actions

export default userReducer.reducer