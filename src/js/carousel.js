export default function Carousel(selector, options) {

    this.carouselContainer = document.querySelector(selector);
    this.carousel = this.carouselContainer.querySelector(options.carousel);
    this.images = this.carousel.children;
    this.nextArrow = this.carouselContainer.querySelector(options.next);
    this.prevArrow = this.carouselContainer.querySelector(options.prev);
    this.paginationItems = this.carouselContainer.querySelectorAll(options.paginationItems);
    this.currentIndex = 0;


    // console.log(this.prevArrow);

    Carousel.prototype.flipping = function (currentIndex) {
        if (currentIndex > this.images.length - 1) {

            currentIndex = 0;
        } else if (currentIndex < 0) {
            // currentIndex = this.images.length - 1;
        }


        this.images[this.currentIndex].style.display = "none";
        this.paginationItems[this.currentIndex].classList.remove(options.activePaginationItemClass);
        console.log("currentIndex", currentIndex);


        this.images[currentIndex].style.display = "block";
        this.paginationItems[currentIndex].classList.add(options.activePaginationItemClass);

        this.currentIndex = currentIndex;


        // this.flipping(2);
        // this.next();
        // this.prev();


    };

    this.nextArrow.addEventListener("click", this.next.bind(this));
    this.prevArrow.addEventListener("click", this.prev.bind(this));


}
Carousel.prototype.next = function () {
    this.flipping(this.currentIndex + 1);
};


Carousel.prototype.prev = function () {
    this.flipping(this.currentIndex - 1);
};







