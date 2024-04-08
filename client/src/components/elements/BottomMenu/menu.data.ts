import { IMenuItem } from './menu.interface'
import Basket from '@/components/pages/Basket/Basket'
import Home from '@/components/pages/Home/Home'
import More from '@/components/pages/More/More'
import Profile from '@/components/pages/Profile/Profile'
import Stock from '@/components/pages/Stock/Stock'

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
