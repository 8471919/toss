import type { Request, Response, NextFunction } from "express";
import moneyService, { MoneyService } from "./money.service";
class MoneyController {
    private service;

    constructor(moneyService: MoneyService) {
        this.service = moneyService;
    }
    importMoney = async (req: Request, res: Response, next: NextFunction) => {
        const user_id = req.params.user_id;
        const money = await this.service.getMoney(user_id);

        // const income = money.filter((el) => el.isIncome === 1);
        // const outgoing = money.filter((el) => el.isIncome === 0);

        const resData: any = { income: [], outgoing: [] };

        money.forEach((el) => {
            if (el.isIncome) {
                resData.income.push(el);
            } else {
                resData.outgoing.push(el);
            }
        });

        res.status(200).send(resData);
    };
    enterMoney = async (req: Request, res: Response, next: NextFunction) => {
        //userId는 일단 임시로 req.body로 받고 나중에 고치자.
        const { price, isIncome, categoryId, paymentsId, userId } = req.body;

        console.log(`price : ${price}, isIncome : ${isIncome}`);

        const money = this.service.insertMoney({
            price,
            isIncome,
            categoryId,
            paymentsId,
            userId,
        });
        console.log("success enter money");

        return res.status(200).send(money);
    };
    lookCategory = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {};
}

export default new MoneyController(moneyService);
