import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

import { Categories } from "./src/output/entities/Categories";
import { Users } from "./src/user/entities/Users";
import { Moneys } from "./src/output/entities/Moneys";
import { Payments } from "./src/output/entities/Payments";

dotenv.config();

const ORMConfig: any = {
    type: "mysql",
    host: process.env.DEV_HOST,
    port: Number(process.env.DEV_PORT),
    username: process.env.DEV_USER,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    entities: [Categories, Users, Moneys, Payments],
    seeds: ["src/database/seeding{.ts,.js}"],
    synchronize: false,
    charset: "utf8mb4",
    logging: true,
};

export = ORMConfig;
