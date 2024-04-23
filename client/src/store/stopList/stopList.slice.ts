import { createSlice } from '@reduxjs/toolkit'

interface IStopList {
  idProducts: number
}

interface IStopListState {
  products: IStopList[]
}

const initialState: IStopListState = {
  products: []
}

const stopListSlice = createSlice({
  name: 'stoplist',
  initialState,

  reducers: {
    changeStopList(state, actions) {
      state.products = actions.payload
    }
  }
})

export const { changeStopList } = stopListSlice.actions

export default stopListSlice.reducer
