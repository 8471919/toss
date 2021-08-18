class StandardDate {
    constructor() {
        this.leftArrow = document.getElementById("decreaseMonth");
        this.rightArrow = document.getElementById("increaseMonth");
        this.monthDiv = document.getElementById("month");

        this.standard = new Date();
        this.updateCycle = UPDATE_CYCLE;
        this.moneyData = [];
        this.monthData = [];

        this.getMoneyData();
    }

    async addFunctionToArrow() {
        this.changeMonth(this.leftArrow, PREV);
        this.changeMonth(this.rightArrow, NEXT);
        this.monthDiv.innerHTML = `${this.standard.getFullYear()}년 ${
            this.standard.getMonth() + NEXT
        }월`;
    }

    setMonthByDifference(difference) {
        const year = this.standard.getFullYear();
        const month = this.standard.getMonth();
        this.standard = new Date(year, month + difference);
    }

    async changeMonth(element, direct = NEXT) {
        element.onclick = async () => {
            this.setMonthByDifference(direct);
            this.monthDiv.innerHTML = `${this.standard.getFullYear()}년 ${
                this.standard.getMonth() + NEXT
            }월`;
            this.updateData(this.standard.getMonth());
        };
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
}
