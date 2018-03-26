export default function Scroll(selector) {
    this.menu = document.querySelector(selector);
    this.menuItems = this.menu.querySelectorAll("li > a");
    this.sections = document.querySelectorAll('[data-section]');
    let self = this;


    function scroll() {

        let length = self.menuItems.length > self.sections.length ? self.sections.length : self.menuItems.length;
        let bottomLimitCord = Math.round(document.body.getBoundingClientRect().bottom);
        let viewportHeight = document.documentElement.clientHeight;

        for (let i = 0; i < length; i++) {

            if (window.pageYOffset >= self.sections[i].offsetTop || bottomLimitCord === viewportHeight) {

                self.menuItems[i].classList.add("active-item");

                if (i !== 0) {
                    self.menuItems[i - 1].classList.remove("active-item");
                }
            } else {
                self.menuItems[i].classList.remove("active-item");
            }

        }

    }

    scroll();

    window.addEventListener("scroll", scroll.bind(this));

}