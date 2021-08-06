import express, { Application } from "express";
import cookieParser from "cookie-parser";
import router from "./indexRouter";

import http from "http";
//TypeORMS
import { createConnection } from "typeorm";
import { Categories } from "./output/entities/Categories";
import { Moneys } from "./output/entities/Moneys";
import { Payments } from "./output/entities/Payments";
import { Users } from "./user/entities/Users";

import passport from "passport";
import passportConfig from "./passport/local";
import jwtPassportConfig from "./passport/jwt";
import path from "path";

const app: Application = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
passportConfig();
jwtPassportConfig();

app.use(router);

(async function () {
    createConnection({
        type: "mysql",
        host: process.env.DEV_HOST,
        port: Number(process.env.DEV_PORT),
        username: process.env.DEV_USER,
        password: process.env.DEV_PASSWORD,
        database: process.env.DEV_DATABASE,
        entities: [Categories, Moneys, Payments, Users],
        synchronize: false,
        logging: true,
    })
        .then((connection) => {
            console.log("typeorm connection success.");
        })
        .catch((error) => console.error(error));
})();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`start! express server on port ${port}`);
});
