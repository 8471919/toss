class List {
    constructor(standardDate) {
        this.standardDate = standardDate;
        this.date = standardDate.standard;

        this.leftArrow = document.getElementById("decreaseMonth");
        this.rightArrow = document.getElementById("increaseMonth");
        this.monthDiv = document.getElementById("month");
        this.list = document.getElementById("list");
        this.listBtn = document.getElementById("listSelector");
        this.toTenData = document.getElementById("listToTen");
        this.toTwentyData = document.getElementById("listToTwenty");
        this.toEndData = document.getElementById("listToEnd");

        this.render();
    }

    async render() {
        //List를 클릭하면 월별 리스트가 나온다.
        this.listBtn.addEventListener("click", async () => {
            //리스트를 띄운다.
            changeZIndexAndOpacity(this.list, 1, 1);

            this.standardDate.updateData(this.date.getMonth());

            this.addFunctionToArrow();
            this.roll();
        });
    }

    drawDate() {
        const curData = this.standardDate.getMonthData();

        for (const data of curData) {
            //getDate로 하면 낮12시를 기점으로 값이 바뀐다.
            const allDate = new Date(data.date);
            const date = allDate.getUTCDate();
            const hours = allDate.getUTCHours();
            const minutes = allDate.getUTCMinutes();
            const time = `${date}일 ${hours}시 ${minutes}분`;

            if (date <= 10) {
                this.toTenData.appendChild(this.drawMoney(time, data));
            } else if (date <= 20) {
                this.toTwentyData.appendChild(this.drawMoney(time, data));
            } else {
                this.toEndData.appendChild(this.drawMoney(time, data));
            }
        }
    }

    deleteDate() {
        while (this.toTenData.hasChildNodes()) {
            this.toTenData.removeChild(this.toTenData.firstChild);
        }
        while (this.toTwentyData.hasChildNodes()) {
            this.toTwentyData.removeChild(this.toTwentyData.firstChild);
        }
        while (this.toEndData.hasChildNodes()) {
            this.toEndData.removeChild(this.toEndData.firstChild);
        }
    }

    drawMoney(time, money) {
        const nowDiv = createEl("div", false, "dayInfo");
        let isIncome = "-";
        if (money.isIncome) {
            isIncome = "+";
        }

        let color = isIncome === "+" ? "blue" : "red";

        nowDiv.innerHTML = `<div class="dateInDayInfo">${time}</div>
                            <div class="priceInDayInfo" style="color:${color}">${isIncome}${money.price}원 </div>
                            <div class="ectInDayInfo">${money.categoryName} &emsp; ${money.paymentName} </div>`;
        return nowDiv;
    }

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
        this.drawDate();
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
            this.deleteDate();
            await this.standardDate.updateData(this.date.getMonth());
            this.drawDate();
        };
    }
}
