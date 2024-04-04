import { DataSource } from 'typeorm'

import Categorie from '../entities/categorie.entity.js';
import Order from '../entities/order.entity.js';
import Product from '../entities/product.entity.js';
import Promotion from '../entities/promotion.entity.js';
import User from '../entities/user.entity.js';
import City from '../entities/city.entity.js';

const entities = [User, Product, Order, Promotion, Categorie, City]

const AppDataSource = new DataSource({
   type: 'mysql',
   database: 'mydb',
   host: process.env.DATABASE_HOST,
   port: parseInt(process.env.DATABASE_PORT || '3306', 10),
   username: process.env.DATABASE_USER || 'root',
   password: process.env.DATABASE_PASSWORD || 'root',
   synchronize: true,
   entities: [...entities]
})

export default AppDataSource
