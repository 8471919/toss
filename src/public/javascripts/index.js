//프론트는 어차피 html에서 js를 불러와서 사용하기 때문에 import를 해줄 필요가 없다.
window.onload = async () => {
    const standardDate = new StandardDate();
    const header = new Header();
    //의존성주입, 디펜던시 인젝션
    const list = new List(standardDate);
};
