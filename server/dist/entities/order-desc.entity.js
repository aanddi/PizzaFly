var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity.js';
import { Order } from './order.entity.js';
let OrderDesc = class OrderDesc {
    id;
    count;
    price;
    discount;
    cost;
    //=========== СВЯЗЬ ===========//
    // Связь с продуктами, в одном заказе могут быть разные продукты
    products;
    // Связь с заказами
    order;
};
__decorate([
    PrimaryGeneratedColumn({ name: 'order_desc_id' }),
    __metadata("design:type", Number)
], OrderDesc.prototype, "id", void 0);
__decorate([
    Column({ name: 'count_product' }),
    __metadata("design:type", Number)
], OrderDesc.prototype, "count", void 0);
__decorate([
    Column({ name: 'price_product' }),
    __metadata("design:type", Number)
], OrderDesc.prototype, "price", void 0);
__decorate([
    Column({ name: 'discount_product' }),
    __metadata("design:type", Number)
], OrderDesc.prototype, "discount", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], OrderDesc.prototype, "cost", void 0);
__decorate([
    OneToOne(() => Product, product => product.orderDesc, { nullable: false }),
    JoinColumn({ name: 'product_id' }),
    __metadata("design:type", Object)
], OrderDesc.prototype, "products", void 0);
__decorate([
    ManyToOne(() => Order, order => order.desc, { nullable: false }),
    JoinColumn({ name: 'order_id' }),
    __metadata("design:type", Object)
], OrderDesc.prototype, "order", void 0);
OrderDesc = __decorate([
    Entity()
], OrderDesc);
export { OrderDesc };
