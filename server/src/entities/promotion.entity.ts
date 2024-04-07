import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { PromotionList } from './promotions-list.entity.js'

@Entity()
export class Promotion {
   @PrimaryGeneratedColumn({ name: 'promotion_id' })
   id: number

   @Column()
   name: string

   @Column()
   desc: string

   @Column()
   banner: string

   @Column()
   promocode: string

   @Column()
   started_at: string

   @Column()
   end_date: string

   // Связь с акциями, разные акции распространяются на разные продукты, одина акция может быть на разные продукты
   @OneToMany(() => PromotionList, promotionlist => promotionlist.promotion)
   productToPromotions: Relation<PromotionList[]>
}
