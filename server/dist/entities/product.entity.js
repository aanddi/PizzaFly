var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categorie } from './categorie.entity.js';
import { OrderDesc } from './order-desc.entity.js';
import { PromotionList } from './promotions-list.entity.js';
import { StopList } from './stop-list.entity.js';
let Product = class Product {
    id;
    name;
    size;
    price;
    image;
    desc;
    discount;
    tags;
    //=========== СВЯЗЬ ===========//
    // Обратная связь с описаниями заказов
    orderDesc;
    // Связь с категорией, нескольким продуктам может принадлежать одна категория (под вопросом правильно или нет)
    categorie;
    // Связь с акциями, разные продукты распространяются на разные акции, один продукт может быть в разных акциях
    productToPromotions;
    // Связь с городами, разные продукты могут быть в стоп листе в разных городах, один продукт может быть в разных акциях
    stopLists;
};
__decorate([
    PrimaryGeneratedColumn({ name: 'product_id' }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "size", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "desc", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Product.prototype, "discount", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "tags", void 0);
__decorate([
    OneToMany(() => OrderDesc, orderDesc => orderDesc.product),
    __metadata("design:type", Object)
], Product.prototype, "orderDesc", void 0);
__decorate([
    ManyToOne(() => Categorie, categorie => categorie.products, { nullable: false }),
    JoinColumn({ name: 'categorie_id' }),
    __metadata("design:type", Object)
], Product.prototype, "categorie", void 0);
__decorate([
    OneToMany(() => PromotionList, promotionlist => promotionlist.product),
    __metadata("design:type", Object)
], Product.prototype, "productToPromotions", void 0);
__decorate([
    OneToMany(() => StopList, stopList => stopList.product),
    __metadata("design:type", Object)
], Product.prototype, "stopLists", void 0);
Product = __decorate([
    Entity()
], Product);
export { Product };
