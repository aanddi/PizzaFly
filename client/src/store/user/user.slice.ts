import IUser from "@/types/user.interface"
import { createSlice } from "@reduxjs/toolkit"

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
      state.user = actions.payload.userData
     }
  }
})

export const { auth } = userSlice.actions

export default userSlice.reducer