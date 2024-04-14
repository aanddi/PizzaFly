import { instance } from '@/api/instance.api'

import ICity from '@/types/city.interface'

export const CitysServices = {
  async getAll() {
    return instance<ICity[]>({
      url: '/citys',
      method: 'GET'
    })
  }
}
