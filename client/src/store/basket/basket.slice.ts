import { createSlice } from '@reduxjs/toolkit'

import IProduct from '@/types/product.interface'

interface IProductBasket extends IProduct {
  count: number
}

interface IBasketState {
  products: IProductBasket[]
  length: number
  price: number
  promocode: string | null
  discont: number | null
}

const initialState: IBasketState = {
  products: [],
  length: 0,
  price: 0,
  promocode: null,
  discont: null
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    addTobasket(state, action) {
      const newProduct = action.payload

      const searchProduct = state.products.findIndex(elem => elem.id === newProduct.id)

      if (searchProduct !== -1) state.products[searchProduct].count += 1
      else state.products.push({ ...newProduct, count: 1 })

      state.length = state.products.reduce((acc, elem) => elem.count + acc, 0)
      state.price = state.products.reduce((acc, elem) => elem.price * elem.count + acc, 0)
    },

    deleteFromBasket(state, action) {
      const removedProduct = action.payload

      const searchProduct = state.products.findIndex(elem => elem.id === removedProduct.id)

      if (state.products[searchProduct].count > 1) state.products[searchProduct].count -= 1
      else state.products.splice(searchProduct, 1)

      state.length = state.products.reduce((acc, elem) => elem.count + acc, 0)
      state.price = state.products.reduce((acc, elem) => elem.price + acc, 0)
    }
  }
})

export const { addTobasket, deleteFromBasket } = basketSlice.actions

export default basketSlice.reducer
