import { AntDesign } from '@expo/vector-icons'
import { ComponentType } from 'react'

export interface IRoute {
  name: string
  component: ComponentType
  icon: keyof typeof AntDesign.glyphMap
}
