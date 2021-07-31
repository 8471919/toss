"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const indexRouter_1 = __importDefault(require("./indexRouter"));
const http_1 = __importDefault(require("http"));
const app = express_1.default();
app.use(express_1.default.static("public"));
app.use(cookie_parser_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(indexRouter_1.default);
const server = http_1.default.createServer(app);
server.listen(3000, () => {
    console.log("start! express server on port 3000");
});
