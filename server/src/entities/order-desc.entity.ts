import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './product.entity.js'

@Entity()
export class OrderDesc {
   @PrimaryGeneratedColumn({ name: 'order_desc_id' })
   id: number

   @Column()
   payment: string

   @Column({ name: 'count_product' })
   count: number

   @Column()
   cost: number

   //=========== СВЯЗЬ ===========//

   // Связь с продуктами, в одном заказе могут быть разные продукты
   @OneToMany(() => Product, product => product.orderDesc, { nullable: false })
   @JoinColumn({ name: "product_id" })
   products: Product[]
}
