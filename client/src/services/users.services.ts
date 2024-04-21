import { instance } from '@/api/instance.api'

import IPromotion from '@/types/promotion.interface'
import IUser from '@/types/user.interface'

export const UsersService = {
  async getUserByPhone(phone: string) {
    return instance<IUser[]>({
      url: `/user/`,
      method: 'GET',
      params: {
        phone: phone
      }
    })
  }
}
