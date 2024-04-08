import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { PromotionList } from './promotions-list.entity.js'

@Entity()
export class Promotion {
   @PrimaryGeneratedColumn({ name: 'promotion_id' })
   id: number

   @Column({ name: 'started_at' })
   startedAt: Date

   @Column({ name: 'end_date' })
   endDate: Date

   @Column()
   name: string

   @Column()
   desc: string

   @Column()
   banner: string

   @Column()
   promocode: string

   //=========== СВЯЗЬ ===========//

   // Связь с акциями, разные акции распространяются на разные продукты, одина акция может быть на разные продукты
   @OneToMany(() => PromotionList, promotionlist => promotionlist.promotion)
   productToPromotions: Relation<PromotionList[]>
}
