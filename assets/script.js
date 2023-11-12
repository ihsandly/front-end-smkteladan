// scroll untuk efek bayangan
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  // posisi awal scroll
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
    navbar.style.transition = "100ms all ease-in-out";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// swiper js
const swiper = new Swiper("#swiper-1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: "2000",
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
});

const swiper2 = new Swiper("#swiper-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: "2000",
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 4,
  spaceBetween: 5,
});
