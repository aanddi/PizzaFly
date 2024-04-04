import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class City {
   @PrimaryGeneratedColumn()
   city_id: number

   @Column()
   name: string
}
