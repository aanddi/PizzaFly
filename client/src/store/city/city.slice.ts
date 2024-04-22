import { createSlice } from '@reduxjs/toolkit'

interface ICityState {
  city: string
}

const initialState: ICityState = {
  city: 'Симферополь'
}

const citySlice = createSlice({
  name: 'city',
  initialState,

  reducers: {
    change(state, actions) {
      state.city = actions.payload
    }
  }
})

export const { change } = citySlice.actions

export default citySlice.reducer
