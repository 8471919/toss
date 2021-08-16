class List {
    constructor() {
        this.leftArrow = document.getElementById("decreaseMonth");
        this.rightArrow = document.getElementById("increaseMonth");
        this.list = document.getElementById("list");
        this.listBtn = document.getElementById("listSelector");
        this.monthDiv = document.getElementById("month");

        this.standardDate = new Date(2021, 0);
        this.moneyData = [];

        this.render();
    }

    setMonthByDifference(difference) {
        const year = this.standardDate.getFullYear();
        const month = this.standardDate.getMonth();
        this.standardDate = new Date(year, month + difference);
    }

    async render() {
        //money data를 담을 변수
        this.moneyData = await this.getMoneyData();

        //달을 바꾸는 화살표를 3번 누를 때 마다 fetch로 정보를 갱신한다.
        this.updateCycle = 3;

        //List를 클릭하면 월별 리스트가 나온다.
        this.listBtn.addEventListener("click", (e) => {
            changeZIndexAndOpacity(this.list, 1, 1);
            this.monthDiv.innerHTML = `${this.standardDate.getMonth() + 1}월`;

            this.leftArrow.onclick = () => {
                this.setMonthByDifference(-1);
                this.monthDiv.innerHTML = `${
                    this.standardDate.getMonth() + 1
                }월`;
            };

            this.rightArrow.onclick = () => {
                this.setMonthByDifference(1);
                this.monthDiv.innerHTML = `${
                    this.standardDate.getMonth() + 1
                }월`;
            };
        });
    }

    async getMoneyData() {
        const resData = await fetch(`/money/list`, {
            headers: { "Content-Type": "application/json" },
            method: "GET",
        });

        const result = await resData.json();
        return result;
    }

    // drawDate(date) {
    //     const el = document.createElement("div"); // create element
    //     el.innerHTML = `${date.getFullYear()}`;
    //     document.getElementById("stactistic").appendChild(el);
    // }

    // drawMoney(money) {
    //     const el = document.createElement(); // create element
    //     const date = document.getElementById(findDate(money.date));
    //     date.appendChild(el);
    // }

    // render() {
    //     const date = this.incomes
    //         .concat(this.outgoings)
    //         .map((money) => money.date)
    //         .filter((date) => duplicate(date));

    //     this.drawDate(date);

    //     this.incomes.forEach((income) => this.drawMoney(income));
    //     this.outgoings.forEach((outgoing) => this.drawMoney(outgoing));
    // }
}
