export default function Scroll(selector) {
    this.menu = document.querySelector(selector);
    this.menuItems = this.menu.querySelectorAll("li > a");
    this.sections = document.querySelectorAll('[data-section]');
    this.menuIcon = document.querySelector(".menu-icon");

    let self = this;
    let length = self.menuItems.length > self.sections.length ? self.sections.length : self.menuItems.length;
    let activeItem = 0;


    function scroll() {

        let bottomLimitCord = Math.round(document.body.getBoundingClientRect().bottom);
        let viewportHeight = document.documentElement.clientHeight;

        for (let i = 0; i < length; i++) {

            if (Math.trunc(self.sections[i].getBoundingClientRect().top) <= 0 || bottomLimitCord === viewportHeight) {

                self.menuItems[i].classList.add("active-item");

                if (i !== 0) {
                    self.menuItems[i - 1].classList.remove("active-item");
                }
            } else {
                self.menuItems[i].classList.remove("active-item");
            }

        }

    }

    function ScrollIntoView (event) {
        let clickedItem = event.target.closest("a");

        for (let i = 0; i < length; i++) {
            let itemText =self.menuItems[i].text.toLocaleLowerCase(),
                sectionAttrValue = self.sections[i].dataset.section;

            if (clickedItem === self.menuItems[i] && itemText === sectionAttrValue) {
                self.sections[i].scrollIntoView({behavior: "smooth", block: "start"});

                activeItem = i;

            }
        }
    }


    function showMenu () {
        if (null !== this) {
            self.menu.classList.toggle("menu-active");
            this.classList.toggle("change");
        }

    }

    scroll();


    this.menuIcon.addEventListener("click", showMenu);


    this.menu.addEventListener("click", ScrollIntoView);
    window.addEventListener("scroll", scroll.bind(this));


}