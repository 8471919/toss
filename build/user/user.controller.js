"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("./user.service"));
class UserController {
    service;
    constructor(userService) {
        this.service = userService;
    }
    //await this.service가 express에서 methods를 통해 호출될 경우에는 변수에 배열형태로 담겨서
    //const handler = flatten(slice.call(arguments)) 형태로 들어가기 때문에
    //화살표함수를 이용한다.
    getAdmin = async (req, res, next) => {
        const email = "adimn";
        const password = "admin";
        const [admin] = await this.service.getOne(email, password);
        res.status(200).send(admin);
    };
    getAll = async (req, res, next) => {
        const users = await this.service.getAll();
        res.send(users);
    };
    async login2(req, res, next) {
        const { email, password } = req.body;
        // const alreadyExist = await this.service.getOne(email, password);
        // if (alreadyExist) {
        //     res.status(400).send("NO USER");
        // }
        // const { email: userEmail } = alreadyExist;
        // res.status(200).send(userEmail);
        return email;
    }
    login = async (req, res, next) => {
        const user = req.user;
        console.log(user);
        res.send(200);
        // const token = jwt.sign(user, "secret");
    };
    logout = async (req, res, next) => { };
    join = async (req, res, next) => {
        const { email, password } = req.body;
        // if (!email) {
        //     res.status(400).send("이메일이 없습니다!");
        // }
        // if (!password) {
        //     res.status(400).send("패스워드가 없습니다!");
        // }
        const createdUser = this.service.create(email, password);
        res.status(201).send(createdUser);
    };
}
exports.default = new UserController(user_service_1.default);
