import { DataSource } from 'typeorm'

import { Categorie } from '../entities/categorie.entity.js'
import { City } from '../entities/city.entity.js'
import { OrderDesc } from '../entities/order-desc.entity.js'
import { Order } from '../entities/order.entity.js'
import { Product } from '../entities/product.entity.js'
import { Promotion } from '../entities/promotion.entity.js'

import { StopList } from '../entities/stop-list.entity.js'
import { User } from '../entities/user.entity.js'

const entities = [Categorie, Product, User, Order, OrderDesc, Promotion, City, StopList]

// Render.com deploy database
const AppDataSource = new DataSource({
   type: 'postgres',
   database: 'pizzafly',
   host: 'dpg-coale4cf7o1s73dsn9q0-a.frankfurt-postgres.render.com',
   port: 5432,
   username: 'aanddi',
   password: 'FulH9vArERhk3wypzG3RqM5bIWsVroq2',
   synchronize: true,
   ssl: true,
   entities: [...entities]
})

// local database
// const AppDataSource = new DataSource({
//    type: 'mysql',
//    database: 'mydb',
//    host: 'localhost',
//    port: 3306,
//    username: 'root',
//    password: 'root',
//    synchronize: true,
//    entities: [...entities]
// })

export default AppDataSource
