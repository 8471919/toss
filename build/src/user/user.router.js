import express from "express";
import userController from "./user.controller";
var userRouter = express.Router();
userRouter.get("/", function (req, res, next) {
    console.log("들어오기는 하냐?");
    next();
}, userController.getAdmin);
userRouter.post("/", userController.login);
export default userRouter;
