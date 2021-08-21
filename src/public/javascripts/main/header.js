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
        this.loginBtn = document.getElementById("loginBtn");

        document.getElementsByName("id")[0].value = `1234`;
        document.getElementsByName("password")[0].value = `123`;

        this.setToggleStatus();
        this.loginFetch();
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
        return cookie;
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
        };
    }

    async loginFetch() {
        this.loginBtn.addEventListener("click", async () => {
            const email = document.getElementsByName("id")[0].value;
            const password = document.getElementsByName("password")[0].value;
            const data = { email, password };

            const resData = await fetch("/user/login", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify(data),
            });

            const { token } = await resData.json();
            document.cookie = `auth=${token}`;

            window.location.reload();
        });
    }
}
