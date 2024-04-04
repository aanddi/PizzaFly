import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class User {
   @PrimaryGeneratedColumn()
   user_id: number

   @Column()
   first_name: string

   @Column()
   surname: string

   @Column()
   patronymic: string

   @Column()
   phone: string

   @Column()
   address: string
}
