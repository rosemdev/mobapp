export default function Carousel(selector, options) {

    this.options = options;
    this.carouselContainer = document.querySelector(selector);
    this.carousel = this.carouselContainer.querySelector(options.carousel);
    this.images = this.carousel.children;
    this.nextArrow = this.carouselContainer.querySelector(options.next);
    this.prevArrow = this.carouselContainer.querySelector(options.prev);
    this.paginationItems = this.carouselContainer.querySelectorAll(options.paginationItems);
    this.currentIndex = options.activeSlide || 0;


    this.flipping(this.currentIndex);
    this.nextArrow.addEventListener("click", this.next.bind(this));
    this.prevArrow.addEventListener("click", this.prev.bind(this));


}

Carousel.prototype.flipping = function (currentIndex) {


    if (currentIndex > this.images.length - 1) {

        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = this.images.length - 1;
    }


    this.images[this.currentIndex].style.display = "none";

    if (this.paginationItems.length) {
        this.paginationItems[this.currentIndex].classList.remove(this.options.activePaginationItemClass);

    }


    this.images[currentIndex].style.display = "block";

    if (this.paginationItems.length) {

        this.paginationItems[currentIndex].classList.add(this.options.activePaginationItemClass);
        console.log(this.options.activePaginationItemClass);
    }


    this.currentIndex = currentIndex;


};


Carousel.prototype.next = function () {
    this.flipping(this.currentIndex + 1);
};


Carousel.prototype.prev = function () {
    this.flipping(this.currentIndex - 1);
};







