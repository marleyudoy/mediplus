// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const hamAddBtn = document.getElementById("hamAddBtn");
const hamCloseBtn = document.getElementById("hamCloseBtn");
const hamMenu = document.getElementById("hamMenu");

hamAddBtn.addEventListener("click", () => {
  hamMenu.classList.toggle("translate-x-[-1000px]");
});
hamCloseBtn.addEventListener("click", () => {
  hamMenu.classList.toggle("translate-x-[-1000px]");
});

const heroSwiper = new Swiper(".swiper", {
  loop: true,
  direction: "horizontal",
  navigation: {
    prevEl: ".swip-next-btn",
    nextEl: ".swip-prev-btn",
  },
});

// const mainTainHopital = new Swiper(".hospital", {
//   direction: "horizontal",

//   breakpoints: {
//     560: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 3,
//     }
//   },
// });
