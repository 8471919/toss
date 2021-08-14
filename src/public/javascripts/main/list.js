class List {
    constructor() {
        this.statistics = document.getElementById("statistics");

        this.getMoneyData();

        this.render();
    }

    async getMoneyData() {
        // fetch, axios
        // this.incomes = [data];
        // this.outgoings = [data];

        const resData = await fetch("/money/list", {
            headers: { "Content-Type": "application/json" },
            method: "GET",
        }).then((res) => console.log(res));

        const result = await resData.json();

        while (result.income.length) {
            const data = result.income.pop();
            const date = new Date(data.date);
            const year = date.getUTCFullYear;
            const month = date.getUTCMonth;
            const day = date.getUTCDay;
            const hours = date.getUTCHours;
            const minutes = date.getUTCMinutes;
        }
    }

    drawDate(date) {
        const el = document.createElement("div"); // create element
        el.innerHTML = `${date.getFullYear()}`;
        document.getElementById("stactistic").appendChild(el);
    }

    drawMoney(money) {
        const el = document.createElement(); // create element
        const date = document.getElementById(findDate(money.date));
        date.appendChild(el);
    }

    render() {
        const date = this.incomes
            .concat(this.outgoings)
            .map((money) => money.date)
            .filter((date) => duplicate(date));

        this.drawDate(date);

        this.incomes.forEach((income) => this.drawMoney(income));
        this.outgoings.forEach((outgoing) => this.drawMoney(outgoing));
    }
}

new List();
