import { instance } from '@/api/instance.api'
import IPromotion from '@/types/promotion.interface'

export const PromotionsService = {
  async getPromotions() {
    return instance<IPromotion[]>({
      url: `/promotions`,
      method: 'GET'
    })
  }
}
