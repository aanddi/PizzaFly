import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import {Order} from './order.entity.js'

@Entity()
export class User {
   @PrimaryGeneratedColumn({ name: 'user_id' })
   id: number

   @CreateDateColumn({ name: 'created_at' })
   createdAt: Date

   @UpdateDateColumn({ name: 'updated_at' })
   updatedAt: Date

   @Column({ name: 'first_name' })
   firstName: string

   @Column()
   surname: string

   @Column({ nullable: true })
   patronymic: string

   @Column()
   phone: string

   @Column({ nullable: true })
   address: string

   //=========== СВЯЗЬ ===========//

   // Связь один ко многим. Один юзер может иметь много заказов.
   @OneToMany(() => Order, order => order.user)
   orders: Order[]
}
