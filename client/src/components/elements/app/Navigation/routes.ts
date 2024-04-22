import CitysList from '@/components/pages/CitysList/CitysList'

import { IRoute } from './navigations.types'
import UserOrders from '@/components/pages/UserOrders/UserOrders'

export const routes: IRoute[] = [
  { name: 'Города', component: CitysList },
  { name: 'История заказов', component: UserOrders }
]
