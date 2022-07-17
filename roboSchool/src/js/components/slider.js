import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const el = document.querySelector('.slider')
const swiper = new Swiper(el, {
  slidesPerView: 4,
  spaceBetween: 40,
  scrollbar: {
    el: '.slider__scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
});