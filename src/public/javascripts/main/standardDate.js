class StandardDate {
    constructor() {
        this.standard = new Date();
        this.updateCycle = UPDATE_CYCLE;
        this.moneyData = [];
        this.monthData = [];

        this.getMoneyData();
    }

    getCookie() {
        // google=3; naver=5; auth=tokenValue;
        const cookie = document.cookie.split("; ").map((el) => {
            const [key, token] = el.split("=");
            return { key, token };
        });

        const [authCookie] = cookie.filter((el) => el.key === "auth");

        if (authCookie && authCookie.token === "null") {
            return false;
        }
        return cookie;
    }

    //오래된 data를 fetch를 다시 한번 해줌으로서 새로 갱신해준다.
    async updateData(month) {
        if (this.updateCycle <= 1) {
            this.updateCycle = UPDATE_CYCLE;
            this.moneyData = await this.getMoneyData();
            this.monthData = this.moneyData[month];
            return this.moneyData[month];
        }
        this.updateCycle--;
        this.monthData = this.moneyData[month];
        return this.moneyData[month];
    }

    async getMoneyData() {
        //cookie가 없으면 data를 가져오지 않는다.
        if (!this.getCookie()) {
            return false;
        }
        const [auth] = this.getCookie().filter((el) => {
            return el.key === "auth";
        });

        console.log(auth);
        const { key, token } = auth;

        const resData = await fetch(`/money/list`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${token}`,
            },
            method: "GET",
        });

        const result = await resData.json();
        this.moneyData = result;
        return result;
    }

    getMonthData() {
        return this.monthData;
    }
}
