import { instance } from '@/api/instance.api'

import IUser from '@/types/user.interface'

export const UsersService = {
  async getUserByPhone(phone: string) {
    return instance<IUser>({
      url: `/users/get/${phone}`,
      method: 'GET'
    })
  },

  async getUsers() {
    return instance<IUser[]>({
      url: `/users`,
      method: 'GET'
    })
  }
}
