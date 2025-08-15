import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// 漢堡選單
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    
    navbarCollapse.addEventListener('show.bs.collapse', function() {
        hamburger.classList.add('open');
    });
    
    navbarCollapse.addEventListener('hide.bs.collapse', function() {
        hamburger.classList.remove('open');
    });
});

// 服務流程
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
    640: {
        slidesPerView: 3,
        spaceBetween: 24,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 24,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 24,
    },
    },
});

// 他們已經踏上職旅
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    breakpoints: {
    640: {
        slidesPerView: 3,
        spaceBetween: 24,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 24,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 24,
    },
    },
});