class List {
    constructor() {
        this.incomes = [];
        this.outgoings = [];
        this.getMoneyData();

        this.render();
    }

    async getMoneyData() {
        // fetch, axios
        // this.incomes = [data];
        // this.outgoings = [data];
    }

    drawDate(data) {
        const el = document.createElement(); // create element
        document.getElementById("stactistic").appendChild(el);
    }

    drawMoney(money) {
        const el = document.createElement(); // create element
        const date = document.getElementById(findDate(money.date));
        date.appendChild(el);
        x;
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
