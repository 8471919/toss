import type { Request, Response, NextFunction } from "express";
import passport from "passport";
import moneyService, { MoneyService } from "./money.service";
class MoneyController {
    private service;

    constructor(moneyService: MoneyService) {
        this.service = moneyService;
    }
    importMoney = async (req: Request, res: Response, next: NextFunction) => {
        if (req.user) {
            const user: any = await req.user;
            const userId = user.id;
            const money = await this.service.getMoney(userId);

            const resData: any = { income: [], outgoing: [] };

            money.forEach((el) => {
                if (el.isIncome) {
                    resData.income.push(el);
                } else {
                    resData.outgoing.push(el);
                }
            });

            return res.status(200).send(resData);
        }
        res.status(400).send("로그인을 해주세요");

        // const income = money.filter((el) => el.isIncome === 1);
        // const outgoing = money.filter((el) => el.isIncome === 0);
    };
    enterMoney = async (req: Request, res: Response, next: NextFunction) => {
        const { price, isIncome, categoryId, paymentsId, userId } = req.body;

        console.log(`price : ${price}, isIncome : ${isIncome}`);

        const money = await this.service.insertMoney({
            price,
            isIncome,
            categoryId,
            paymentsId,
            userId,
        });
        console.log("success enter money");

        return res.status(200).send(money);
    };
    lookCategory = async (req: Request, res: Response, next: NextFunction) => {
        const { categoryId }: any = req.query;

        if (req.user) {
            const user: any = await req.user;
            const id = user.id;
            console.log("user : ", user);
            const category = await this.service.getCategory(id, categoryId);
            console.log(category);
            return res.status(200).send(category);
        }
        res.status(400).send("로그인을 해주세요.");
    };
}

export default new MoneyController(moneyService);
