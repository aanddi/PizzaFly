import Basket from '@/pages/Basket/Basket'
import Home from '@/pages/Home/Home'
import More from '@/pages/More/More'
import Profile from '@/pages/Profile/Profile'
import Stock from '@/pages/Stock/Stock'

import { IMenuItem } from './menu.interface'

export const menuData: IMenuItem[] = [
  {
    name: 'Меню',
    component: Home,
    icon: 'home'
  },
  {
    name: 'Акции',
    component: Stock,
    icon: 'staro'
  },
  {
    name: 'Корзина',
    component: Basket,
    icon: 'shoppingcart'
  },
  {
    name: 'Профиль',
    component: Profile,
    icon: 'user'
  },
  {
    name: 'Еще',
    component: More,
    icon: 'ellipsis1'
  }
]
