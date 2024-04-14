import { instance } from '@/api/instance.api'

import ICategorie from '@/types/caterorie.interface'

export const CategoriesService = {
  async getAll() {
    return instance<ICategorie[]>({
      url: `/categories/`,
      method: 'GET'
    })
  }
}
