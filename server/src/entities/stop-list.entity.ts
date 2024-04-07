import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { City } from './city.entity.js'

@Entity()
export class StopList {
   @PrimaryGeneratedColumn({ name: 'stop_list_id' })
   id: number

   @Column()
   dddd: string

   @ManyToOne(() => StopList, stopList => stopList.city)
   @JoinColumn({ name: 'city_id' })
   city: City
}
