const burger = document.getElementById('menuNavigation');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

var slider = new Swiper ('.carousel-burger', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    loopedSlides: 6,
    navigation: {
        nextEl: '.carouselNext-btn',
        prevEl: '.carouselPrev-btn',
    },
});

var thumbs = new Swiper ('.carousel-burger-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: false,
    slideToClickedSlide: true,
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;


var review = new Swiper(".carousel-review", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".carouselReviewNext-btn",
      prevEl: ".carouselReviewPrev-btn",
    },
  });