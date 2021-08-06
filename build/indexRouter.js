"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const money_router_1 = __importDefault(require("./money/money.router"));
const user_router_1 = __importDefault(require("./user/user.router"));
const path_1 = __importDefault(require("path"));
const indexRouter = express_1.default.Router();
indexRouter.use("/money", money_router_1.default);
indexRouter.use("/user", user_router_1.default);
indexRouter.get("/", (req, res, next) => {
    // res.send("<div style='font-size : 30px'>Hello, world! </div>");
    res.sendFile(path_1.default.join(__dirname + "/public/html/main.html"));
});
exports.default = indexRouter;
