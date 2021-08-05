"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user.controller"));
const passport_1 = __importDefault(require("passport"));
const userRouter = express_1.default.Router();
// userRouter.get("/", userController.print);
//userRouter.methods('/', parameter)에서
//parameter의 this가 undefined이므로, bind를 사용하거나 class의 함수를 만들 경우
//화살표함수를 사용한다.
userRouter.post("/login", passport_1.default.authenticate("local", { session: false }), user_controller_1.default.login);
userRouter.post("/logout", user_controller_1.default.logout);
userRouter.post("/join", user_controller_1.default.join);
userRouter.get("/", passport_1.default.authenticate("jwt", { session: false }), user_controller_1.default.getAll);
// userRouter.get("/", userController.getAdmin);
userRouter.post("/", user_controller_1.default.login2);
exports.default = userRouter;
