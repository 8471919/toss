"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
const Categories_1 = require("./src/output/entities/Categories");
const Users_1 = require("./src/user/entities/Users");
const Moneys_1 = require("./src/output/entities/Moneys");
const Payments_1 = require("./src/output/entities/Payments");
console.log(new Moneys_1.Moneys());
dotenv_1.default.config();
const ORMConfig = {
    type: "mysql",
    host: process.env.DEV_HOST,
    port: Number(process.env.DEV_PORT),
    username: process.env.DEV_USER,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    entities: [Categories_1.Categories, Users_1.Users, Moneys_1.Moneys, Payments_1.Payments],
    synchronize: false,
    charset: "utf8mb4",
    logging: true,
};
module.exports = ORMConfig;
