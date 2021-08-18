class List {
    constructor(standardDate) {
        this.standardDate = standardDate;
        this.date = standardDate.standard;

        this.list = document.getElementById("list");
        this.listBtn = document.getElementById("listSelector");

        this.monthData;

        this.render();
    }

    async render() {
        //money data를 담을 변수

        //List를 클릭하면 월별 리스트가 나온다.
        this.listBtn.addEventListener("click", async () => {
            //리스트를 띄운다.
            changeZIndexAndOpacity(this.list, 1, 1);

            //달에 대한 수입,지출 내역을 갖고온다.
            await this.standardDate.updateData(this.date.getMonth());

            //화살표를 누를 때마다 월이 바뀐다.
            await this.standardDate.addFunctionToArrow();
        });
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
