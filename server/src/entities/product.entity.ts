import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Categorie } from './categorie.entity.js'
import { OrderDesc } from './order-desc.entity.js'
import { StopList } from './stop-list.entity.js'

@Entity()
export class Product {
   @PrimaryGeneratedColumn({ name: 'product_id' })
   id: number

   @Column()
   name: string

   @Column()
   size: string

   @Column()
   price: number

   @Column()
   image: string

   @Column()
   desc: string

   @Column()
   discount: number

   @Column({ nullable: true })
   tags: string

   //=========== СВЯЗЬ ===========//

   // Обратная связь с описаниями заказов
   @OneToMany(() => OrderDesc, orderDesc => orderDesc.product)
   orderDesc: Relation<OrderDesc[]>

   // Связь с категорией, нескольким продуктам может принадлежать одна категория (под вопросом правильно или нет)
   @ManyToOne(() => Categorie, categorie => categorie.products, { nullable: false })
   @JoinColumn({ name: 'categorie_id' })
   categorie: Relation<Categorie>

   // Связь с городами, разные продукты могут быть в стоп листе в разных городах, один продукт может быть в разных акциях
   @OneToMany(() => StopList, stopList => stopList.product)
   stopLists: Relation<StopList[]>
}
