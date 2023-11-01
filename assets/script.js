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

// splide js
const splide1 = new Splide("#splide-1", {
  type: "fade",
  rewind: true,
  autoplay: true,
});
splide1.mount();

const splide2 = new Splide("#splide-2", {
  type: "loop",
  perPage: true,
  focus: "center",
});
splide2.mount();
