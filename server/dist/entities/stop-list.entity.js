var __decorate =
   (this && this.__decorate) ||
   function (decorators, target, key, desc) {
      var c = arguments.length,
         r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
         d
      if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
         r = Reflect.decorate(decorators, target, key, desc)
      else
         for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
      return c > 3 && r && Object.defineProperty(target, key, r), r
   }
var __metadata =
   (this && this.__metadata) ||
   function (k, v) {
      if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v)
   }
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { City } from './city.entity.js'
import { Product } from './product.entity.js'
let StopList = class StopList {
   id
   //=========== СВЯЗЬ ===========//
   city
   product
}
__decorate(
   [PrimaryGeneratedColumn({ name: 'stop_list_id' }), __metadata('design:type', Number)],
   StopList.prototype,
   'id',
   void 0
)
__decorate(
   [
      ManyToOne(
         () => City,
         city => city.stopLists,
         { nullable: false }
      ),
      JoinColumn({ name: 'city_id' }),
      __metadata('design:type', Object)
   ],
   StopList.prototype,
   'city',
   void 0
)
__decorate(
   [
      ManyToOne(
         () => Product,
         product => product.stopLists,
         { nullable: false }
      ),
      JoinColumn({ name: 'product_id' }),
      __metadata('design:type', Object)
   ],
   StopList.prototype,
   'product',
   void 0
)
StopList = __decorate([Entity()], StopList)
export { StopList }
