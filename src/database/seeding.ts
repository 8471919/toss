import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Users } from "../user/entities/Users";
import { Moneys } from "../money/entities/Moneys";

const getRandomArbitrary = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min) + min);

function twoDigits(d: number) {
    if (0 <= d && d < 10) return "0" + d.toString();
    if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
    return d.toString();
}

const toMysqlFormat = (date: Date) => {
    return (
        date.getUTCFullYear() +
        "-" +
        twoDigits(1 + date.getUTCMonth()) +
        "-" +
        twoDigits(date.getUTCDate()) +
        " " +
        twoDigits(date.getUTCHours()) +
        ":" +
        twoDigits(date.getUTCMinutes()) +
        ":" +
        twoDigits(date.getUTCSeconds())
    );
};

export default class createSeedData implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        // await connection
        //     .createQueryBuilder()
        //     .insert()
        //     .into(Users)
        //     .values([
        //         { email: "amdim@admin.com", password: "adimn" },
        //         { email: "hansu@naver.com", password: "123456789" },
        //     ])
        //     .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(Moneys)
            .values(
                // [
                // { price: "10000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "20000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "30000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "40000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "50000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "60000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "70000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "80000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "90000", categoryId: 1, paymentsId: 1, userId: 1 },
                // { price: "100000", categoryId: 1, paymentsId: 1, userId: 1 },
                // ]

                new Array(365 * 5).fill(0).map((el) => {
                    const price = String(getRandomArbitrary(10, 100000));
                    const categoryId = getRandomArbitrary(1, 5);
                    const paymentId = getRandomArbitrary(1, 4);
                    const isIncome = getRandomArbitrary(0, 2);
                    // 2021, 08, 30, 23, 59 59

                    const year = 2021;
                    const month = getRandomArbitrary(0, 11);
                    const day = getRandomArbitrary(1, 30);
                    const hours = getRandomArbitrary(0, 23);
                    const minutes = getRandomArbitrary(0, 59);
                    const seconds = getRandomArbitrary(0, 59);
                    const date = new Date(
                        year,
                        month,
                        day,
                        hours,
                        minutes,
                        seconds
                    );
                    const mysqlDate = toMysqlFormat(date);

                    return {
                        price,
                        isIncome,
                        categoryId,
                        paymentId,
                        userId: 1,
                        date: mysqlDate,
                    };
                })
            )
            .execute();
    }
}
