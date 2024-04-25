import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Order } from './order.entity.js'
import { Product } from './product.entity.js'

@Entity()
export class OrderDesc {
   @PrimaryGeneratedColumn({ name: 'order_desc_id' })
   id: number

   @Column({ name: 'count_product' })
   count: number

   @Column({ name: 'price_product' })
   price: number

   @Column({ name: 'discount_product' })
   discount: number

   @Column()
   cost: number

   //=========== СВЯЗЬ ===========//

   // Связь с продуктом
   @ManyToOne(() => Product, product => product.orderDesc, { nullable: false })
   @JoinColumn({ name: 'product_id' })
   product: Relation<Product>

   // Связь с заказами
   @ManyToOne(() => Order, order => order.desc, { nullable: false })
   @JoinColumn({ name: 'order_id' })
   order: Relation<Order>
}
