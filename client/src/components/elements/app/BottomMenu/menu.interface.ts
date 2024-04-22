import { AntDesign } from '@expo/vector-icons'

import { IRoute } from '../Navigation/navigations.types'

export interface IMenuItem extends IRoute {
  icon: keyof typeof AntDesign.glyphMap
}
