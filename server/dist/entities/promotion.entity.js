var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PromotionList } from './promotions-list.entity.js';
let Promotion = class Promotion {
    id;
    startedAt;
    endDate;
    name;
    desc;
    banner;
    promocode;
    //=========== СВЯЗЬ ===========//
    // Связь с акциями, разные акции распространяются на разные продукты, одина акция может быть на разные продукты
    productToPromotions;
};
__decorate([
    PrimaryGeneratedColumn({ name: 'promotion_id' }),
    __metadata("design:type", Number)
], Promotion.prototype, "id", void 0);
__decorate([
    Column({ name: 'started_at' }),
    __metadata("design:type", Date)
], Promotion.prototype, "startedAt", void 0);
__decorate([
    Column({ name: 'end_date' }),
    __metadata("design:type", Date)
], Promotion.prototype, "endDate", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Promotion.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Promotion.prototype, "desc", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Promotion.prototype, "banner", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Promotion.prototype, "promocode", void 0);
__decorate([
    OneToMany(() => PromotionList, promotionlist => promotionlist.promotion),
    __metadata("design:type", Object)
], Promotion.prototype, "productToPromotions", void 0);
Promotion = __decorate([
    Entity()
], Promotion);
export { Promotion };
