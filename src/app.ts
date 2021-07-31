import express, { Application } from "express";
import cookieParser from "cookie-parser";
import router from "./indexRouter";

import http from "http";

const app: Application = express();

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("start! express server on port 3000");
});
