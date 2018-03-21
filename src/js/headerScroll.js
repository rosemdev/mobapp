export default function stickyHeader(selector, options) {

    const header = document.querySelector(selector),
        headerOffset = header.offsetTop,
        sibling = document.querySelector(options.sibling);



    function stickyHeader() {

        if (window.pageYOffset > headerOffset) {
            header.classList.add(options.class);
            sibling.style.paddingTop = header.offsetHeight + "px";


        } else {
            header.classList.remove(options.class);
            sibling.style.paddingTop = "";
        }
    }

    window.addEventListener("scroll", stickyHeader);


}