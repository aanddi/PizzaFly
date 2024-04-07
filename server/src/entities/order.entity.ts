import {
   Column,
   CreateDateColumn,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToOne,
   PrimaryGeneratedColumn,
   UpdateDateColumn
} from 'typeorm'

import { User } from './user.entity.js'
import { OrderDesc } from './order-desc.entity.js'

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
   receipt: number

   @Column()
   status: string

   //=========== СВЯЗЬ ===========//

   // Связь многие ко одному. Много заказов может быть у юзера
   @ManyToOne(() => User, user => user.orders, { nullable: false })
   @JoinColumn({ name: 'user_id' })
   user: User

   // Связь с описанием заказа
   @OneToOne(() => OrderDesc, { nullable: false })
   @JoinColumn({ name: 'order_desc_id' })
   desc: OrderDesc
}
