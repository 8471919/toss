"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_serivce_1 = __importDefault(require("./user.serivce"));
class UserController {
    service;
    constructor(userSerivce) {
        this.service = userSerivce;
    }
    async getAdmin(req, res, next) {
        const email = "adimn";
        const password = "admin";
        const [admin] = await this.service.getOne(email, password);
        res.status(200).send(admin);
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        // const alreadyExist = await this.service.getOne(email, password);
        // if (alreadyExist) {
        //     res.status(400).send("NO USER");
        // }
        // const { email: userEmail } = alreadyExist;
        // res.status(200).send(userEmail);
        return email;
    }
}
exports.default = new UserController(user_serivce_1.default);
