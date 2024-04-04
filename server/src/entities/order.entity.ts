import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Order {
   @PrimaryGeneratedColumn()
   order_id: number

   @Column()
   date: string

   @Column()
   payment: string

   @Column()
   receipt: string

   @Column()
   status: string
}
