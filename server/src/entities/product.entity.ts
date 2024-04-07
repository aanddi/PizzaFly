import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { OrderDesc } from './order-desc.entity.js'
import { Categorie } from './categorie.entity.js'
import { PromotionList } from './promotions-list.entity.js'
import { StopList } from './stop-list.entity.js'

@Entity()
export class Product {
   @PrimaryGeneratedColumn()
   product_id: number

   @Column()
   name: string

   @Column()
   size: number

   @Column()
   price: number

   @Column()
   image: string

   @Column()
   desc: string

   @Column()
   discount: number

   @Column()
   tags: string

   //=========== СВЯЗЬ ===========//

   // Связь с заказом, разные продукты могут быть в одном заказе 
   @ManyToOne(() => OrderDesc, order => order.products)
   orderDesc: OrderDesc

   // Связь с категорией, нескольким продуктам может принадлежать одна категория (под вопросом правильно или нет)
   @ManyToOne(() => Categorie, categorie => categorie.products, { nullable: false })
   @JoinColumn({ name: "categorie_id"})
   categorie: Relation<Categorie>

   // Связь с акциями, разные продукты распространяются на разные акции, один продукт может быть в разных акциях
   @OneToMany(() => PromotionList, promotionlist => promotionlist.product)
   productToPromotions: Relation<PromotionList[]>

   // Связь с городами, разные продукты могут быть в стоп листе в разных городах, один продукт может быть в разных акциях
   @OneToMany(() => StopList, stopList => stopList.product)
   stopLists: Relation<StopList[]>
}
