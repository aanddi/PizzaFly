import { instance } from '@/api/instance.api'

interface INewPosition {
  id: number
  price: number
  count: number
  discount: number
}

interface INewOrder {
  userId: number
  price: number
  payment: string
  comment: string
  promocode: string
  discont: number
  products: INewPosition[]
}

export const OrdersService = {
  async newOrder(data: any) {
    return instance<INewOrder[]>({
      url: `/orders/new`,
      method: 'POST',
      data
    })
  }
}
