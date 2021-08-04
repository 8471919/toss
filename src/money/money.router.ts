import express from "express";
import moneyController from "./money.controller";

const moneyRouter = express.Router();

moneyRouter.get("/:user_id", moneyController.importMoney);

moneyRouter.post("/", moneyController.enterMoney);
// moneyRouter.get("/", moneyController.lookCategory);

export default moneyRouter;
