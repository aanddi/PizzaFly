import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Product } from './product.entity.js'
import { Promotion } from './promotion.entity.js'

@Entity()
export class PromotionList {
   @PrimaryGeneratedColumn({ name: 'promotion_list_id' })
   id: number

   @Column()
   discount: string

   //=========== СВЯЗЬ ===========//

   @ManyToOne(() => Promotion, promotion => promotion.productToPromotions, { nullable: false })
   @JoinColumn({ name: 'promotion_id' })
   promotion: Relation<Promotion>

   @ManyToOne(() => Product, product => product.productToPromotions, { nullable: false })
   @JoinColumn({ name: 'product_id' })
   product: Relation<Product>
}
