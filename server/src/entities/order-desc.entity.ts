import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Product } from './product.entity.js'
import { Order } from './order.entity.js'

@Entity()
export class OrderDesc {
   @PrimaryGeneratedColumn({ name: 'order_desc_id' })
   id: number

   @Column({ name: 'count_product' })
   count: number

   @Column()
   cost: number

   //=========== СВЯЗЬ ===========//

   // Связь с продуктами, в одном заказе могут быть разные продукты
   @OneToOne(() => Product, product => product.orderDesc, { nullable: false })
   @JoinColumn({ name: 'product_id' })
   products: Relation<Product>

   // Связь с заказами
   @ManyToOne(() => Order, order => order.desc, { nullable: false })
   @JoinColumn({ name: 'order_id' })
   order: Relation<OrderDesc[]>
}
