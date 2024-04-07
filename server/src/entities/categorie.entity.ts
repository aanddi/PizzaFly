import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Categorie {
   @PrimaryGeneratedColumn({ name: 'categorie_id' })
   id: number

   @Column()
   name: string
}
