import { instance } from '@/api/instance.api'

import IOrderDesc from '@/types/order-desc.interface'
import IOrder from '@/types/order.interface'
import IProduct from '@/types/product.interface'

interface INewPosition {
  id: number
  price: number
  count: number
  discount: number
}

interface INewOrder {
  userId: number | undefined
  price: number | null
  payment: string
  comment: string
  promocode: string | null
  discont: number | null
  products: INewPosition[]
  address: string | undefined
}

interface IOrderDescResponse extends IOrderDesc {
  product: IProduct
}

export const OrdersService = {
  async newOrder(data: INewOrder) {
    return instance<INewOrder[]>({
      url: `/orders/new`,
      method: 'POST',
      data
    })
  },
  async myOrders(userId: number | undefined) {
    return instance<IOrder[]>({
      url: `/orders/${userId}`,
      method: 'GET'
    })
  },
  async ordersDesc(orderId: number | undefined) {
    return instance<IOrderDescResponse[]>({
      url: `/orders/desc/${orderId}`,
      method: 'GET'
    })
  }
}
