import { getConnection, getRepository, Repository } from "typeorm";
import pool from "../database/config";
import { Moneys } from "../output/entities/Moneys";

class MoneyService {
    private readonly moneyRepository: Repository<Moneys>;
    constructor() {}
    getMoney = async (user_id: any) => {
        // const income = await pool.query(
        //     `select * from moneys where users_id = ${user_id} and is_income = 1`
        // );

        // return income;

        // console.log("here");
        // const connection = getConnection();
        // console.log(connection);
        // console.log("ended");

        // return [1];

        const moneyRepository = getRepository<Moneys>(Moneys);
        const money = await moneyRepository.find({
            where: {
                userId: user_id,
            },
        });

        return money;
    };
    // getOutgoing = async (user_id: any) => {
    //     const outgoing = await pool.query(
    //         `select * from moneys where users_id = ${user_id} and is_income = 0`
    //     );

    //     return outgoing;
    // };
    putMoney = async (price: any, is_income: boolean) => {
        // const sql = {is_income, price,  }
        const inputMoney = await pool.query(`insert into moneys set ?`);
    };
}

export type { MoneyService };
export default new MoneyService();
