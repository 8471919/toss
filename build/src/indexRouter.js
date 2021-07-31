import express from "express";
import moneyRouter from "./money/money.router";
import userRouter from "./user/user.router";
var indexRouter = express.Router();
indexRouter.use("/money", moneyRouter);
indexRouter.use("/user", userRouter);
export default indexRouter;
