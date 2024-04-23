import { instance } from '@/api/instance.api'

import IPromotion from '@/types/promotion.interface'

interface IPromotionsCheck {
  promocode: string
  discount: number
}

interface IPromotionsRequest {
  price: number
  promocode: string
  idUser: number | undefined
}

export const PromotionsService = {
  async getPromotions() {
    return instance<IPromotion[]>({
      url: `/promotions`,
      method: 'GET'
    })
  },
  
  async checkPromocode(data: IPromotionsRequest) {
    return instance<IPromotionsCheck>({
      url: `/promotions/check`,
      method: 'POST',
      data
    })
  }
}
