import { NextFunction, Request, Response } from "express";
import userSerivce, { UserService } from "./user.serivce";

class UserController {
    private service: UserService;

    constructor(userSerivce: any) {
        this.service = userSerivce;
    }

    async getAdmin(req: Request, res: Response, next: NextFunction) {
        const email = "adimn";
        const password = "admin";

        const [admin] = await this.service.getOne(email, password);
        res.status(200).send(admin);
    }

    async login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        // const alreadyExist = await this.service.getOne(email, password);

        // if (alreadyExist) {
        //     res.status(400).send("NO USER");
        // }

        // const { email: userEmail } = alreadyExist;
        // res.status(200).send(userEmail);

        return email;
    }
}

export default new UserController(userSerivce);
