import { getConnection, getRepository, Repository } from "typeorm";
import pool from "../database/config";
import { Moneys } from "./entities/Moneys";

class MoneyService {
    // private readonly moneyRepository: Repository<Moneys>;
    constructor() {}

    getAllMoney = async () => {
        const moneyRepository = getRepository<Moneys>(Moneys);
        const money = await moneyRepository.find();

        return money;
    };

    getMoney = async (user_id: any) => {
        const moneyRepository = getRepository<Moneys>(Moneys);
        const money = await moneyRepository
            .createQueryBuilder("M")
            .select([
                "M.id as id",
                "P.name as paymentName",
                "C.name as categoryName",
                "M.isIncome as isIncome",
            ])
            .innerJoin("M.category", "C")
            .innerJoin("M.payment", "P")
            .where(`M.userId = ${user_id}`)
            .getRawMany();

        return money;
    };

    //실제 돈과 관련된 로직은 수정이 되면 위험할 수 있으므로, 수정은 따로 만들지 않는다.
    insertMoney = async (obj: any | { isIncome?: 0 | 1 }) => {
        const moneyRepository = getRepository<Moneys>(Moneys);
        const { isIncome, price, categoryId, paymentId, userId } = obj;

        // 수정시, undefined를 value로 가지는 객체를 제거하는 로직
        // Object.keys(obj).forEach(
        //     (el) => obj[el] === undefined && delete obj[el]
        // );

        // const moneyToUpdate = await moneyRepository.findOne(obj.id);
        //userId는 일단 req.body로 받고, 어떻게 넣어야 할지 고민해보자. 세션? 쿠키?
        const money = await moneyRepository.save({
            isIncome,
            price,
            categoryId,
            paymentId,
            userId,
        });
        return money;
    };

    getCategory = async (userId?: string, categoryId?: string) => {
        const moneyRepository = getRepository<Moneys>(Moneys);
        const money = await moneyRepository.find({
            where: {
                userId,
                categoryId,
            },
        });
        return money;
    };
}

export type { MoneyService };
export default new MoneyService();
