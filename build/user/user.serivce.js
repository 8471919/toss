"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const config_1 = __importDefault(require("../database/config"));
class UserService {
    constructor() {
        // if (!instance) {
        //     instance = this;
        //     return this;
        // } else {
        //     return instance;
        // }
    }
    create() { }
    async getOne(email, password) {
        //     // DB에 접근해서 ID와 패스워드가 일치하는 것을 찾는다.
        //     const createdUser = {
        //         email: "hansu@naver.com",
        //         password: "123456789@",
        //     };
        //     return createdUser;
        // }
        const users = await config_1.default.query("SELECT * FROM USERS");
        return users;
    }
}
exports.UserService = UserService;
let instance = null;
new UserService();
exports.default = new UserService();
