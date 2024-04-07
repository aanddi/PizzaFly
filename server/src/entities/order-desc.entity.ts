import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}
