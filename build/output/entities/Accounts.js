var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Moneys } from "./Moneys";
import { Users } from "./Users";
var Accounts = /** @class */ (function () {
    function Accounts() {
    }
    __decorate([
        Column("int", { name: "USER_ID" })
    ], Accounts.prototype, "userId", void 0);
    __decorate([
        Column("int", { name: "MONEY_ID" })
    ], Accounts.prototype, "moneyId", void 0);
    __decorate([
        ManyToOne(function () { return Moneys; }, function (moneys) { return moneys.accounts; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        JoinColumn([{ name: "MONEY_ID", referencedColumnName: "id" }])
    ], Accounts.prototype, "money", void 0);
    __decorate([
        ManyToOne(function () { return Users; }, function (users) { return users.accounts; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        JoinColumn([{ name: "USER_ID", referencedColumnName: "id" }])
    ], Accounts.prototype, "user", void 0);
    Accounts = __decorate([
        Index("fk_USERS_has_MONEYS_MONEYS1_idx", ["moneyId"], {}),
        Index("fk_USERS_has_MONEYS_USERS_idx", ["userId"], {}),
        Entity("accounts", { schema: "toss" })
    ], Accounts);
    return Accounts;
}());
export { Accounts };
