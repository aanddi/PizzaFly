import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PromotionList {
   @PrimaryGeneratedColumn({ name: 'promotion_list_id' })
   id: number

   @Column()
   discount: string
}
