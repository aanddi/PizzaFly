import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Promotion {
   @PrimaryGeneratedColumn()
   promotion_id: number

   @Column()
   name: string

   @Column()
   desc: string

   @Column()
   banner: string

   @Column()
   promocode: string

   @Column()
   started_at: string

   @Column()
   end_date: string
}
