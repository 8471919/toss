var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, OneToMany } from "typeorm";
import { Moneys } from "./Moneys";
var Payments = /** @class */ (function () {
    function Payments() {
    }
    __decorate([
        Column("int", { primary: true, name: "ID" })
    ], Payments.prototype, "id", void 0);
    __decorate([
        Column("varchar", { name: "NAME", nullable: true, length: 20 })
    ], Payments.prototype, "name", void 0);
    __decorate([
        OneToMany(function () { return Moneys; }, function (moneys) { return moneys.payments; })
    ], Payments.prototype, "moneys", void 0);
    Payments = __decorate([
        Entity("payments", { schema: "toss" })
    ], Payments);
    return Payments;
}());
export { Payments };
