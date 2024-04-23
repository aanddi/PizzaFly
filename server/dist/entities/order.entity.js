var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { OrderDesc } from './order-desc.entity.js';
import { User } from './user.entity.js';
let Order = class Order {
    id;
    createdAt;
    updatedAt;
    payment;
    receipt;
    status;
    //=========== СВЯЗЬ ===========//
    // Связь многие ко одному. Много заказов может быть у юзера
    user;
    // Связь с описанием заказа. Несколько описаний у одного заказа
    desc;
};
__decorate([
    PrimaryGeneratedColumn({ name: 'order_id' }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Order.prototype, "payment", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Order.prototype, "receipt", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    ManyToOne(() => User, user => user.orders, { nullable: false }),
    JoinColumn({ name: 'user_id' }),
    __metadata("design:type", User
    // Связь с описанием заказа. Несколько описаний у одного заказа
    )
], Order.prototype, "user", void 0);
__decorate([
    OneToMany(() => OrderDesc, orderDesc => orderDesc.order, { nullable: false }),
    __metadata("design:type", Object)
], Order.prototype, "desc", void 0);
Order = __decorate([
    Entity()
], Order);
export { Order };
