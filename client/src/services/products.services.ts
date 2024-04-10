import { instance } from '@/api/instance.api'
import IProduct from '@/types/product.interface'

export const ProductsService = {
  async getProducts(categoriesId: number) {
    return instance<IProduct[]>({
      //  url: '/products/?categorie=categoriesActive',
      url: '/products/',
      method: 'GET'
    })
  }
}