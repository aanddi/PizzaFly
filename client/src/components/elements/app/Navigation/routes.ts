import CitysList from '@/components/pages/CitysList/CitysList'
import DescOrder from '@/components/pages/DescOrder/DescOrder'
import MyOrders from '@/components/pages/MyOrders/MyOrders'
import NewOrders from '@/components/pages/NewOrders/NewOrders'
import UserOrders from '@/components/pages/UserOrders/UserOrders'

import { IRoute } from './navigations.types'

export const routes: IRoute[] = [
  { name: 'Города', component: CitysList },
  { name: 'История заказов', component: UserOrders },
  { name: 'Новый заказ', component: NewOrders },
  { name: 'Мои заказы', component: MyOrders },
  { name: 'Подробнее о заказе', component: DescOrder }
]
