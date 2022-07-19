import { auto } from '@popperjs/core';
import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const el = document.querySelector('.slider')
const swiper = new Swiper(el, {
  slidesPerView: auto,
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