import IProduct from '@/types/product.interface'
import { createSlice } from '@reduxjs/toolkit'

interface IStopList {
  id: number
  product: IProduct 
}

interface IStopListState {
  productsStopList: IStopList[]
}

const initialState: IStopListState = {
  productsStopList: []
}

const stopListSlice = createSlice({
  name: 'stoplist',
  initialState,

  reducers: {
    changeStopList(state, actions) {
      state.productsStopList = actions.payload
    }
  }
})

export const { changeStopList } = stopListSlice.actions

export default stopListSlice.reducer