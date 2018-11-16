export default class ElementUtils {
    constructor() {

    }

    public isScrolledIntoView(el) {
        let rect = el.getBoundingClientRect();
        let elTop = rect.top;
        var elBottom = rect.bottom;
        // Only completely visible elements return true:
        //let isVisible = (elTop >= 0) && (elBottom <= window.innerHeight);
        // Partially visible elements return true:
        let isVisible = elTop < window.innerHeight && elBottom >= 0;
        return isVisible;
    }

    public getElHeight(el) {
        return el.offsetHeight;
    }
}