import { createSlice } from '@reduxjs/toolkit'

import { IPromotionsCheck } from '@/services/promotions.services'

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
  discont: 0
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
      // price считается с учетом скидки на позицию и количество
      state.price = state.products.reduce((acc, elem) => (elem.price - (elem.price * elem.discount) / 100) * elem.count + acc, 0)
      state.price = Math.round(state.price)
    },

    deleteFromBasket(state, action) {
      const removedProduct = action.payload

      const searchProduct = state.products.findIndex(elem => elem.id === removedProduct.id)

      if (state.products[searchProduct].count > 1) state.products[searchProduct].count -= 1
      else state.products.splice(searchProduct, 1)

      state.length = state.products.reduce((acc, elem) => elem.count + acc, 0)
      // price считается с учетом скидки на позицию и количество
      state.price = state.products.reduce((acc, elem) => (elem.price - (elem.price * elem.discount) / 100) * elem.count + acc, 0)
      state.price = Math.round(state.price)
    },

    resetDiscont(state) {
      state.promocode = null
      state.discont = 0
    },

    addPromotions(state, action) {
      const poromotions: IPromotionsCheck = action.payload
      state.promocode = poromotions.promocode
      state.discont = poromotions.discount
    },

    resetBasket(state) {
      state.products = []
      state.length = 0
      state.price = 0
      state.promocode = null
      state.discont = 0
    }
  }
})

export const { addTobasket, deleteFromBasket, addPromotions, resetDiscont, resetBasket } = basketSlice.actions

export default basketSlice.reducer
