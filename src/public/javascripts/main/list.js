class List {
    constructor(standardDate) {
        this.standardDate = standardDate;
        this.date = standardDate.standard;

        this.leftArrow = document.getElementById("decreaseMonth");
        this.rightArrow = document.getElementById("increaseMonth");
        this.monthDiv = document.getElementById("month");
        this.list = document.getElementById("list");
        this.listBtn = document.getElementById("listSelector");

        this.monthData;

        this.render();
    }

    async render() {
        //List를 클릭하면 월별 리스트가 나온다.
        this.listBtn.addEventListener("click", async () => {
            //리스트를 띄운다.
            changeZIndexAndOpacity(this.list, 1, 1);

            this.standardDate.updateData(this.date.getMonth());

            this.addFunctionToArrow();
        });
    }

    // drawDate() {
    //     const curData = this.standardDate.getMonthData();
    //     curData.
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

    async addFunctionToArrow() {
        this.changeMonth(this.leftArrow, PREV);
        this.changeMonth(this.rightArrow, NEXT);
        this.monthDiv.innerHTML = `${this.date.getFullYear()}년 ${
            this.date.getMonth() + NEXT
        }월`;
    }

    setMonthByDifference(difference) {
        const year = this.date.getFullYear();
        const month = this.date.getMonth();
        this.date = new Date(year, month + difference);
    }

    async changeMonth(element, direct = NEXT) {
        element.onclick = async () => {
            this.setMonthByDifference(direct);
            this.monthDiv.innerHTML = `${this.date.getFullYear()}년 ${
                this.date.getMonth() + NEXT
            }월`;
            this.standardDate.updateData(this.date.getMonth());
        };
    }
}
