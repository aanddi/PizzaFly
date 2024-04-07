import { DataSource } from 'typeorm'

import { Categorie } from '../entities/categorie.entity.js'
import { City } from '../entities/city.entity.js'
import { OrderDesc } from '../entities/order-desc.entity.js'
import { Order } from '../entities/order.entity.js'
import { Product } from '../entities/product.entity.js'
import { Promotion } from '../entities/promotion.entity.js'
import { PromotionList } from '../entities/promotions-list.entity.js'
import { StopList } from '../entities/stop-list.entity.js'
import { User } from '../entities/user.entity.js'

const entities = [Categorie, Product, User, Order, OrderDesc, PromotionList, Promotion, City, StopList]

const AppDataSource = new DataSource({
   type: 'mysql',
   database: 'mydb',
   host: '127.0.0.1',
   port: 3306,
   username: 'root',
   password: 'root',
   synchronize: true,
   entities: [...entities]
})

export default AppDataSource
