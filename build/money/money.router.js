"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const money_controller_1 = __importDefault(require("./money.controller"));
const moneyRouter = express_1.default.Router();
moneyRouter.get("/:user_id", money_controller_1.default.importMoney);
moneyRouter.post("/", money_controller_1.default.enterMoney);
// moneyRouter.get("/", moneyController.lookCategory);
exports.default = moneyRouter;
