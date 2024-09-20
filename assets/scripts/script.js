const burger = document.getElementById('menuNavigation');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

const searchIcon = document.querySelectorAll('.bx-search');
const searchBox = document.querySelectorAll('.search__container');

const bagIcon = document.querySelector('.bag-icon');
const bag = document.querySelector('.bag__container');
const closeBag = document.querySelector('.close-icon');
const bagCard = document.querySelectorAll('.bag__card');
const bagItemCheck = document.querySelectorAll('.icon-check');

const bagIconMenu = document.querySelector('.bag__icon-menu');
const bagMenu = document.querySelector('.bag__container__menu');
const closeBagMenu = document.querySelector('.close-icon__bag-menu');
const bagCardMenu = document.querySelectorAll('.bag__card__menu');
const bagItemCheckMenu = document.querySelectorAll('.icon-check__menu');

searchIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
        searchIcon.forEach((icon) => {
            icon.classList.toggle('bx-x');
        });
        searchBox.forEach((item) => {
            item.classList.toggle('active');
        });
    })
})

bagCard.forEach((item) => {
    item.addEventListener('click', () => {
        bagItemCheck.forEach((itemCheck) => {
            itemCheck.classList.toggle('check-active');
        })
    })
})

bagCardMenu.forEach((items) => {
    items.addEventListener('click', () => {
        bagItemCheckMenu.forEach((itemsCheck) => {
            itemsCheck.classList.toggle('check-active');
        })
    })
})

// Bag \\
bagIcon.addEventListener('click', () => {
    bag.classList.add('active');
});

closeBag.addEventListener('click', () => {
    bag.classList.remove('active');
});

// Bag - Menu \\
 bagIconMenu.addEventListener('click', () => {
     bagMenu.classList.add('active');
 });

closeBagMenu.addEventListener('click', () => {
    bagMenu.classList.remove('active');
});


// Menu \\
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
    loopedSlides: 10,
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