import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Categorie {
   @PrimaryGeneratedColumn()
   categorie_id: number

   @Column()
   name: string
}
