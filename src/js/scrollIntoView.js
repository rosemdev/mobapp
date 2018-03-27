export default function Scroll(selector) {
    this.menu = document.querySelector(selector);
    this.menuItems = this.menu.querySelectorAll("li > a");
    this.sections = document.querySelectorAll('[data-section]');
    this.menuIcon = document.querySelector(".menu-icon");
    console.log(this.menuIcon);
    let self = this;
    let length = self.menuItems.length > self.sections.length ? self.sections.length : self.menuItems.length;
    let activeItem = 0;


    function scroll() {

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

    function ScrollIntoView (event) {
        let clickedItem = event.target.closest("a");
        console.log("clicked el: ", clickedItem);

        for (let i = 0; i < length; i++) {
            let itemText =self.menuItems[i].text.toLocaleLowerCase(),
                sectionAttrValue = self.sections[i].dataset.section;

            if (clickedItem === self.menuItems[i] && itemText === sectionAttrValue) {
                self.menuItems[i].classList.add("active-item");
                self.sections[i].scrollIntoView({behavior: "smooth"});
                console.log("item", self.menuItems[i]);
                // console.log("section", self.sections[i]);

                activeItem = i;

            } else {
                self.menuItems[activeItem].classList.remove("active-item");
            }

        }
    }


    function showMenu () {
        if (null !== this) {
            console.log(this);
            self.menu.classList.toggle("menu-active");
            this.classList.toggle("change");
        }

    }

    scroll();


    this.menuIcon.addEventListener("click", showMenu);


    this.menu.addEventListener("click", ScrollIntoView);
    window.addEventListener("scroll", scroll.bind(this));


}