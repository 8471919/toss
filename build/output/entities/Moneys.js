var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, } from "typeorm";
import { Accounts } from "./Accounts";
import { Categories } from "./Categories";
import { Payments } from "./Payments";
var Moneys = /** @class */ (function () {
    function Moneys() {
    }
    __decorate([
        Column("int", { primary: true, name: "ID" })
    ], Moneys.prototype, "id", void 0);
    __decorate([
        Column("datetime", {
            name: "CREATED_AT",
            default: function () { return "CURRENT_TIMESTAMP"; },
        })
    ], Moneys.prototype, "createdAt", void 0);
    __decorate([
        Column("tinyint", { name: "IS_INCOME", default: function () { return "'0'"; } })
    ], Moneys.prototype, "isIncome", void 0);
    __decorate([
        Column("decimal", { name: "PRICE", nullable: true, precision: 10, scale: 0 })
    ], Moneys.prototype, "price", void 0);
    __decorate([
        Column("varchar", { name: "MONEYScol", nullable: true, length: 45 })
    ], Moneys.prototype, "moneyScol", void 0);
    __decorate([
        Column("int", { name: "CATEGORY_ID" })
    ], Moneys.prototype, "categoryId", void 0);
    __decorate([
        Column("int", { name: "PAYMENTS_ID" })
    ], Moneys.prototype, "paymentsId", void 0);
    __decorate([
        OneToMany(function () { return Accounts; }, function (accounts) { return accounts.money; })
    ], Moneys.prototype, "accounts", void 0);
    __decorate([
        ManyToOne(function () { return Categories; }, function (categories) { return categories.moneys; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        JoinColumn([{ name: "CATEGORY_ID", referencedColumnName: "id" }])
    ], Moneys.prototype, "category", void 0);
    __decorate([
        ManyToOne(function () { return Payments; }, function (payments) { return payments.moneys; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        JoinColumn([{ name: "PAYMENTS_ID", referencedColumnName: "id" }])
    ], Moneys.prototype, "payments", void 0);
    Moneys = __decorate([
        Index("fk_MONEYS_CATEGORIES1_idx", ["categoryId"], {}),
        Index("fk_MONEYS_PAYMENTS1_idx", ["paymentsId"], {}),
        Entity("moneys", { schema: "toss" })
    ], Moneys);
    return Moneys;
}());
export { Moneys };
