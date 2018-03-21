import stickeHeader from "./headerScroll"

window.onload = function () {

    let header = new stickeHeader("header", {
        class: "sticky",
        sibling: "h1"
    });

};