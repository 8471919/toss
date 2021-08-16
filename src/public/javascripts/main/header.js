// function* getChildNodes(parent) {
//     for (const a of parent.childNodes) {
//         yield a;

//         for (const b of getChildNodes(a)) {
//             yield b;
//         }
//     }
// }

class Header {
    constructor() {
        this.loginToggleButton = document.getElementById("loginToggle");

        this.setToggleStatus();
    }

    async setToggleStatus() {
        if (this.getCookie()) {
            // 로그인된 것
            this.loginToggleButton.textContent = "logout";
            this.loginToggleButton.onclick = () => {
                //auth=3으로 되어있던 쿠키값이 auth=null로 바뀐다. 덮어쓰기된다.
                document.cookie = "auth=null";
                //새로고침
                window.location.reload();
            };
            return true;
        }

        // 로그인이 아직 되지 않은 것
        this.loginToggleButton.textContent = "login";
        this.loginToggleButton.onclick = () => {
            //이벤트를 테스트하기 위해 쿠키를 준다.
            //원래 있던 naver=3 과같은 쿠키 뒤에 붙는다.
            document.cookie = "auth=3";
            const modalBackground = document.getElementById("modalBackground");
            changeZIndexAndOpacity(modalBackground, 5, 0.7);

            const modalOuter = document.getElementById("modalOuter");
            changeZIndexAndOpacity(modalOuter, 6, 1);

            modalBackground.onclick = () => {
                changeZIndexAndOpacity(modalBackground, -10, 0);
                changeZIndexAndOpacity(modalOuter, -5, 0);
            };

            // window.onclick = (event) => {
            //     if (event.target === this.loginToggleButton) {
            //         return;
            //     }

            //     const cur = document.getElementById("modalOuter");
            //     // cur에 대한 체크도 해주어야 한다.
            //     if (event.target === cur) {
            //         return;
            //     }
            //     for (const child of getChildNodes(cur)) {
            //         if (event.target === child) {
            //             return;
            //         }
            //     }

            //     modalBackground.style.zIndex = -10;
            //     modalBackground.style.backgroundColor = "transparent";
            //     modalBackground.style.opacity = "0";
            // };
        };
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
        return true;
    }
}
