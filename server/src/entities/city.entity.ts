import { StopList } from './stop-list.entity.js'

import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'

@Entity()
export class City {
   @PrimaryGeneratedColumn()
   city_id: number

   @Column()
   name1: string

   @OneToMany(() => StopList, stopList => stopList.city)
   stopLists: Relation<StopList[]>
}
