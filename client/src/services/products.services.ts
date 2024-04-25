import { instance } from '@/api/instance.api'

import IProduct from '@/types/product.interface'

interface IStopList {
  id: number
  product: IProduct
}

export const ProductsService = {
  async getProducts(categoriesId: number) {
    return instance<IProduct[]>({
      url: `/products`,
      method: 'GET',
      params: {
        categorie: categoriesId
      }
    })
  },
  async getStopList(cityId: string) {
    return instance<IStopList[]>({
      url: `/products/stoplist/?city=${cityId}`,
      method: 'GET'
    })
  }
}
