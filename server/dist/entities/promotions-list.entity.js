var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity.js';
import { Promotion } from './promotion.entity.js';
let PromotionList = class PromotionList {
    id;
    discount;
    //=========== СВЯЗЬ ===========//
    promotion;
    product;
};
__decorate([
    PrimaryGeneratedColumn({ name: 'promotion_list_id' }),
    __metadata("design:type", Number)
], PromotionList.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], PromotionList.prototype, "discount", void 0);
__decorate([
    ManyToOne(() => Promotion, promotion => promotion.productToPromotions, { nullable: false }),
    JoinColumn({ name: 'promotion_id' }),
    __metadata("design:type", Object)
], PromotionList.prototype, "promotion", void 0);
__decorate([
    ManyToOne(() => Product, product => product.productToPromotions, { nullable: false }),
    JoinColumn({ name: 'product_id' }),
    __metadata("design:type", Object)
], PromotionList.prototype, "product", void 0);
PromotionList = __decorate([
    Entity()
], PromotionList);
export { PromotionList };
