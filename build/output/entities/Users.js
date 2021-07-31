var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Accounts } from "./Accounts";
var Users = /** @class */ (function () {
    function Users() {
    }
    __decorate([
        PrimaryGeneratedColumn({ type: "int", name: "ID" })
    ], Users.prototype, "id", void 0);
    __decorate([
        Column("varchar", { name: "EMAIL", unique: true, length: 45 })
    ], Users.prototype, "email", void 0);
    __decorate([
        Column("varchar", { name: "PASSWORD", length: 100 })
    ], Users.prototype, "password", void 0);
    __decorate([
        OneToMany(function () { return Accounts; }, function (accounts) { return accounts.user; })
    ], Users.prototype, "accounts", void 0);
    Users = __decorate([
        Index("EMAIL_UNIQUE", ["email"], { unique: true }),
        Entity("users", { schema: "toss" })
    ], Users);
    return Users;
}());
export { Users };
