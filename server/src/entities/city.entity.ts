import { StopList } from './stop-list.entity.js'

import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'

@Entity()
export class City {
   @PrimaryGeneratedColumn({ name: 'city_id' })
   id: number

   @Column()
   name: string

   //=========== СВЯЗЬ ===========//

   @OneToMany(() => StopList, stopList => stopList.city)
   stopLists: Relation<StopList[]>
}
