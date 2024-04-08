import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { City } from './city.entity.js'
import { Product } from './product.entity.js'

@Entity()
export class StopList {
   @PrimaryGeneratedColumn({ name: 'stop_list_id' })
   id: number

   //=========== СВЯЗЬ ===========//

   @ManyToOne(() => City, city => city.stopLists, { nullable: false })
   @JoinColumn({ name: 'city_id' })
   city: Relation<City>

   @ManyToOne(() => Product, product => product.stopLists, { nullable: false })
   @JoinColumn({ name: 'product_id' })
   product: Relation<Product>
}
