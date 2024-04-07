import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Product } from './product.entity.js'

@Entity()
export class Categorie {
   @PrimaryGeneratedColumn({ name: 'categorie_id' })
   id: number

   @Column()
   name: string

   //=========== СВЯЗЬ ===========//

   // Связь с продуктами, одной категории может принадлежать несколько продуктов
   @OneToMany(() => Product, product => product.categorie)
   products: Relation<Product[]>
}
