import express from "express";
import userController from "./user.controller";
import passport from "passport";

const userRouter = express.Router();

// userRouter.get("/", userController.print);
//userRouter.methods('/', parameter)에서
//parameter의 this가 undefined이므로, bind를 사용하거나 class의 함수를 만들 경우
//화살표함수를 사용한다.

userRouter.post(
    "/login",
    passport.authenticate("local", { session: false }),
    userController.login
);

userRouter.post("/logout", userController.logout);

userRouter.post("/join", userController.join);

userRouter.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    userController.getAll
);
// userRouter.get("/", userController.getAdmin);
userRouter.post("/", userController.login2);

export default userRouter;
