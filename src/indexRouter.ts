import express, { Response, Request, NextFunction } from "express";
import moneyRouter from "./money/money.router";
import userRouter from "./user/user.router";

const indexRouter = express.Router();

indexRouter.use("/money", moneyRouter);
indexRouter.use("/user", userRouter);
indexRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("<div style='font-size : 30px'>Hello, world! </div>");
});

export default indexRouter;
