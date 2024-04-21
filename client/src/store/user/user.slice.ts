import { createSlice } from '@reduxjs/toolkit'

import IUser from '@/types/user.interface'

interface IUserState {
  user: IUser | null
  isAuth: boolean
}

const initialState: IUserState = {
  user: null,
  isAuth: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    auth(state, actions) {
      state.isAuth = true
      state.user = actions.payload
    },

    logout(state) {
      state.isAuth = false
      state.user = null
    }
  }
})

export const { auth, logout } = userSlice.actions

export default userSlice.reducer
