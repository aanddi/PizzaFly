import Basket from '@/components/pages/Basket/Basket'
import Home from '@/components/pages/Home/Home'
import Profile from '@/components/pages/Profile/Profile'
import PromotionPage from '@/components/pages/Promotions/Promotions'

import { IMenuItem } from './menu.interface'

export const menuData: IMenuItem[] = [
  {
    name: 'Меню',
    component: Home,
    icon: 'home'
  },
  {
    name: 'Акции',
    component: PromotionPage,
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
  }
  // {
  //   name: 'Еще',
  //   component: More,
  //   icon: 'ellipsis1'
  // }
]
