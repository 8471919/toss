import express, { Response, Request, NextFunction } from "express";
import moneyRouter from "./money/money.router";
import userRouter from "./user/user.router";
import path from "path";

const indexRouter = express.Router();

indexRouter.use("/money", moneyRouter);
indexRouter.use("/user", userRouter);
indexRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    // res.send("<div style='font-size : 30px'>Hello, world! </div>");
    res.sendFile(path.join(__dirname + "/public/html/main.html"));
});

export default indexRouter;
