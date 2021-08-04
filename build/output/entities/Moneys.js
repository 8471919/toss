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
exports.Moneys = void 0;
const typeorm_1 = require("typeorm");
const Categories_1 = require("./Categories");
const Payments_1 = require("./Payments");
const Users_1 = require("../../user/entities/Users");
let Moneys = class Moneys {
    id;
    date;
    isIncome;
    price;
    categoryId;
    paymentsId;
    userId;
    category;
    payments;
    users;
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: "ID" }),
    __metadata("design:type", Number)
], Moneys.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "DATE", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Moneys.prototype, "date", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "IS_INCOME", default: () => "'0'" }),
    __metadata("design:type", Number)
], Moneys.prototype, "isIncome", void 0);
__decorate([
    typeorm_1.Column("decimal", { name: "PRICE", precision: 10, scale: 0 }),
    __metadata("design:type", String)
], Moneys.prototype, "price", void 0);
__decorate([
    typeorm_1.Column("int", { name: "CATEGORY_ID" }),
    __metadata("design:type", Number)
], Moneys.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "PAYMENTS_ID" }),
    __metadata("design:type", Number)
], Moneys.prototype, "paymentsId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "USER_ID" }),
    __metadata("design:type", Number)
], Moneys.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Categories_1.Categories, (categories) => categories.moneys, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "CATEGORY_ID", referencedColumnName: "id" }]),
    __metadata("design:type", Categories_1.Categories)
], Moneys.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Payments_1.Payments, (payments) => payments.moneys, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "PAYMENTS_ID", referencedColumnName: "id" }]),
    __metadata("design:type", Payments_1.Payments)
], Moneys.prototype, "payments", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.moneys, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    typeorm_1.JoinColumn([{ name: "USER_ID", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], Moneys.prototype, "users", void 0);
Moneys = __decorate([
    typeorm_1.Index("fk_MONEYS_CATEGORIES1_idx", ["categoryId"], {}),
    typeorm_1.Index("fk_MONEYS_PAYMENTS1_idx", ["paymentsId"], {}),
    typeorm_1.Index("fk_MONEYS_USERS1_idx", ["userId"], {}),
    typeorm_1.Entity("moneys", { schema: "toss" })
], Moneys);
exports.Moneys = Moneys;
