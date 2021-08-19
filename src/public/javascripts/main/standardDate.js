class StandardDate {
    constructor() {
        this.standard = new Date();
        this.updateCycle = UPDATE_CYCLE;
        this.moneyData = [];
        this.monthData = [];

        this.getMoneyData();
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
        const resData = await fetch(`/money/list`, {
            headers: { "Content-Type": "application/json" },
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
