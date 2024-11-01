var swiper = new Swiper(".t-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
    autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});