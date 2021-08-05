"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const money_controller_1 = __importDefault(require("./money.controller"));
const moneyRouter = express_1.default.Router();
moneyRouter.get("/:user_id", money_controller_1.default.importMoney);
moneyRouter.post("/", money_controller_1.default.enterMoney);
moneyRouter.get("/", passport_1.default.authenticate("jwt"), money_controller_1.default.lookCategory);
exports.default = moneyRouter;
