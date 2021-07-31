import pool from "../database/config";

class UserService {
    constructor() {
        // if (!instance) {
        //     instance = this;
        //     return this;
        // } else {
        //     return instance;
        // }
    }

    create() {}

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
}

let instance: UserService | null = null;

new UserService();

export { UserService };
export default new UserService();
