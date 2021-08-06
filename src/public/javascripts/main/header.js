class Header {
    constructor() {
        const body = document.body;
        const header = document.createElement("div");
        header.style.display = "flex";
        const title = document.createElement("div");
        title.innerHTML = `<a href="/">Toss</a>`;

        const selector = document.createElement("div");
        selector.style.display = "flex";
        selector.innerHTML = `<div> Calender </div> 
            <div> List </div> 
            <div> Graph </div>`;
        const userState = document.createElement("div");
        userState.style.display = "flex";
        let state = "login";
        userState.innerHTML = `<div> ${state} </div>`;

        header.appendChild(title);
        header.appendChild(selector);
        header.appendChild(userState);
        body.appendChild(header);
    }
}

window.onload = () => {
    new Header();
};
