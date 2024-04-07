import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
   @PrimaryGeneratedColumn()
   product_id: number

   @Column()
   name: string

   @Column()
   size: number

   @Column()
   price: number

   @Column()
   image: string

   @Column()
   desc: string

   @Column()
   discount: number

   @Column()
   tags: string
}
