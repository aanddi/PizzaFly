import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Promotion {
   @PrimaryGeneratedColumn({ name: 'promotion_id' })
   id: number

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
