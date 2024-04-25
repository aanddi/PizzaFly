import {
   Column,
   CreateDateColumn,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToMany,
   PrimaryGeneratedColumn,
   Relation,
   UpdateDateColumn
} from 'typeorm'

import { OrderDesc } from './order-desc.entity.js'
import { User } from './user.entity.js'

@Entity()
export class Order {
   @PrimaryGeneratedColumn({ name: 'order_id' })
   id: number

   @CreateDateColumn({ name: 'created_at' })
   createdAt: Date

   @UpdateDateColumn({ name: 'updated_at' })
   updatedAt: Date

   @Column()
   payment: string

   @Column()
   price: number

   @Column()
   status: string

   @Column({ nullable: true })
   comment: string

   @Column({ nullable: true })
   promocode: string

   @Column({ nullable: true })
   discont: number

   @Column({ nullable: false })
   address: string

   //=========== СВЯЗЬ ===========//

   // Связь многие ко одному. Много заказов может быть у юзера
   @ManyToOne(() => User, user => user.orders, { nullable: true })
   @JoinColumn({ name: 'user_id' })
   user: User

   // Связь с описанием заказа. Несколько описаний у одного заказа
   @OneToMany(() => OrderDesc, orderDesc => orderDesc.order)
   desc: Relation<OrderDesc[]>
}
