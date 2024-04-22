import CitysList from '@/components/pages/CitysList/CitysList'
import UserOrders from '@/components/pages/UserOrders/UserOrders'

import { IRoute } from './navigations.types'

export const routes: IRoute[] = [
  { name: 'Города', component: CitysList },
  { name: 'История заказов', component: UserOrders }
]
