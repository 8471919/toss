"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const indexRouter_1 = __importDefault(require("./indexRouter"));
const http_1 = __importDefault(require("http"));
const typeorm_1 = require("typeorm");
const Categories_1 = require("./output/entities/Categories");
const Moneys_1 = require("./output/entities/Moneys");
const Payments_1 = require("./output/entities/Payments");
const Users_1 = require("./user/entities/Users");
const app = express_1.default();
app.use(express_1.default.static("public"));
app.use(cookie_parser_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(indexRouter_1.default);
(async function () {
    typeorm_1.createConnection({
        type: "mysql",
        host: process.env.DEV_HOST,
        port: Number(process.env.DEV_PORT),
        username: process.env.DEV_USER,
        password: process.env.DEV_PASSWORD,
        database: process.env.DEV_DATABASE,
        entities: [Categories_1.Categories, Moneys_1.Moneys, Payments_1.Payments, Users_1.Users],
        synchronize: false,
        logging: true,
    })
        .then((connection) => {
        console.log("typeorm connection success.");
    })
        .catch((error) => console.error(error));
})();
const server = http_1.default.createServer(app);
server.listen(3000, () => {
    console.log("start! express server on port 3000");
});
