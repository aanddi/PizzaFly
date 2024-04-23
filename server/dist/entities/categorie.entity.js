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
import { Product } from './product.entity.js';
let Categorie = class Categorie {
    id;
    name;
    //=========== СВЯЗЬ ===========//
    // Связь с продуктами, одной категории может принадлежать несколько продуктов
    products;
};
__decorate([
    PrimaryGeneratedColumn({ name: 'categorie_id' }),
    __metadata("design:type", Number)
], Categorie.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Categorie.prototype, "name", void 0);
__decorate([
    OneToMany(() => Product, product => product.categorie),
    __metadata("design:type", Object)
], Categorie.prototype, "products", void 0);
Categorie = __decorate([
    Entity()
], Categorie);
export { Categorie };
