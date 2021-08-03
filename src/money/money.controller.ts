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
    // enterMoney = async (req: Request, res: Response, next: NextFunction) => {
    //     const price = req.body.price;
    //     const is_income = req.body.is_income;
    //     console.log(`price : ${price}, is_income : ${is_income}`);
    //     if (is_income) {
    //         this.service.putMoney(price, is_income);
    //         return;
    //     }
    //     this.service.putMoney(price, is_income);
    // };
    // lookCategory = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ) => {};
}

export default new MoneyController(moneyService);
