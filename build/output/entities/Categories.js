"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const typeorm_1 = require("typeorm");
const Moneys_1 = require("./Moneys");
let Categories = class Categories {
    id;
    name;
    moneys;
};
__decorate([
    typeorm_1.Column("int", { primary: true, name: "ID" }),
    __metadata("design:type", Number)
], Categories.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "NAME", length: 20 }),
    __metadata("design:type", String)
], Categories.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => Moneys_1.Moneys, (moneys) => moneys.category),
    __metadata("design:type", Array)
], Categories.prototype, "moneys", void 0);
Categories = __decorate([
    typeorm_1.Entity("categories", { schema: "toss" })
], Categories);
exports.Categories = Categories;
