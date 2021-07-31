import express from "express";
import userController from "./user.controller";

const userRouter = express.Router();

userRouter.get("/", userController.getAdmin.bind(userController));
userRouter.post("/", userController.login);

export default userRouter;
