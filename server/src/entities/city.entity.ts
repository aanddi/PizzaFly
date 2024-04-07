import { StopList } from './stop-list.entity.js'

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class City {
   @PrimaryGeneratedColumn()
   city_id: number

   @Column()
   name: string

   @OneToMany(() => StopList, stopList => stopList.city)
   stopLists: StopList[]
}
