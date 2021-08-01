import express, { Response, Request, NextFunction } from "express";
import moneyRouter from "./money/money.router";
import userRouter from "./user/user.router";

const router = express.Router();

// router.use("/money", moneyRouter);
router.use("/user", userRouter);
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("<div style='font-size : 30px'>Hello, world! </div>");
});

export default router;
