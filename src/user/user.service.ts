import { getRepository } from "typeorm";
import pool from "../database/config";
import { Users } from "./entities/Users";

class UserService {
    constructor() {
        // if (!instance) {
        //     instance = this;
        //     return this;
        // } else {
        //     return instance;
        // }
    }

    async create(email: string, password: string) {
        const userRepository = getRepository<Users>(Users);

        const createdUser = await userRepository.save({
            email,
            password,
        });
        return createdUser;
    }

    async getUserByEmail(email: string) {
        const userRepository = getRepository<Users>(Users);
        const user = userRepository.findOne({
            where: { email },
        });
        return user;
    }

    async getOne(email: string, password: string) {
        //     // DB에 접근해서 ID와 패스워드가 일치하는 것을 찾는다.
        //     const createdUser = {
        //         email: "hansu@naver.com",
        //         password: "123456789@",
        //     };

        //     return createdUser;
        // }

        const users = await pool.query("SELECT * FROM USERS");

        return users;
    }

    async getAll() {
        const [users] = await pool.query("SELECT * FROM USERS");

        return users;
    }
}

// let instance: UserService | null = null;

// new UserService();

export type { UserService };
export default new UserService();
