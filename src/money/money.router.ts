import express from "express";
import passport from "passport";
import moneyController from "./money.controller";

const moneyRouter = express.Router();

moneyRouter.get("/", moneyController.getAllMoney);

moneyRouter.get(
    "/calender",
    passport.authenticate("jwt", { session: false }),
    moneyController.importMoney
);

moneyRouter.get(
    "/list",
    passport.authenticate("jwt", { session: false }),
    moneyController.importMoney
);

moneyRouter.post("/", moneyController.enterMoney);
moneyRouter.get(
    "/graph",
    passport.authenticate("jwt", {
        session: false,
    }),
    moneyController.lookCategory
);

export default moneyRouter;
