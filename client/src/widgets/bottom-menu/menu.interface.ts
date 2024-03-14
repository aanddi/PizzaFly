import { IRoute } from '@/app/navigation/navigations.types'
import { AntDesign } from '@expo/vector-icons'

export interface IMenuItem extends IRoute {
  icon: keyof typeof AntDesign.glyphMap
}
