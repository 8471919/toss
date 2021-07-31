import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./indexRouter";
import http from "http";
var app = express();
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", function (req, res, next) {
    console.log("들어오기는 하냐1?");
    next();
}, indexRouter);
var server = http.createServer(app);
server.listen(3000, function () {
    console.log("start! express server on port 3000");
    console.log(typeof express);
});
