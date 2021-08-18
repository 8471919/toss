const NEXT = 1;
const PREV = -1;
const UPDATE_CYCLE = 3;

const changeZIndexAndOpacity = (el, zIndex, opacity) => {
    el.style.zIndex = zIndex;
    el.style.opacity = opacity;
};
