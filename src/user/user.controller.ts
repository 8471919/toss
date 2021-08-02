import { NextFunction, Request, Response } from "express";
import { NotEmittedStatement } from "typescript";
import userService, { UserService } from "./user.service";

class UserController {
    private service: UserService;

    constructor(userService: UserService) {
        this.service = userService;
    }

    //await this.service가 express에서 methods를 통해 호출될 경우에는 변수에 배열형태로 담겨서
    //const handler = flatten(slice.call(arguments)) 형태로 들어가기 때문에
    //화살표함수를 이용한다.
    getAdmin = async (req: Request, res: Response, next: NextFunction) => {
        const email = "adimn";
        const password = "admin";

        const [admin] = await this.service.getOne(email, password);
        res.status(200).send(admin);
    };

    async login2(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        // const alreadyExist = await this.service.getOne(email, password);

        // if (alreadyExist) {
        //     res.status(400).send("NO USER");
        // }

        // const { email: userEmail } = alreadyExist;
        // res.status(200).send(userEmail);

        return email;
    }

    login = async (req: Request, res: Response, next: NextFunction) => {};
    logout = async (req: Request, res: Response, next: NextFunction) => {};
    join = async (req: Response, res: Response, next: NextFunction) => {};
}

export default new UserController(userService);
