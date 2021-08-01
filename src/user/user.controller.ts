import { NextFunction, Request, Response } from "express";
import userService, { UserService } from "./user.serivice";

class UserController {
    private service: UserService;

    constructor(userService: UserService) {
        this.service = userService;
    }

    getAdmin = async (req: Request, res: Response, next: NextFunction) => {
        const email = "adimn";
        const password = "admin";

        const [admin] = await this.service.getOne(email, password);
        console.log(this);
        res.status(200).send(admin);
    };

    async print() {
        console.log(this);
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

export default new UserController(userService);
