function myChangeBackgroundColor() {
    const width = window.innerWidth;
    const htmlTag = document.documentElement;

    if (width >= 1337) {
        htmlTag.style.backgroundColor = "#ffb703";
    } else if (width >= 505 && width <= 1336) {
        htmlTag.style.backgroundColor = "#d90429";
    } else {
        htmlTag.style.backgroundColor = "#003049";
    }
}

window.addEventListener("resize", myChangeBackgroundColor);
myChangeBackgroundColor(); // Appel initial
