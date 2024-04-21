import { instance } from '@/api/instance.api'

import IUser from '@/types/user.interface'

export const UsersService = {
  async getUserByPhone(phone: string) {
    return instance<IUser>({
      url: `/user/get`,
      method: 'GET',
      params: {
        phone: phone
      }
    })
  }
}
