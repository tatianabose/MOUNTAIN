let hamberger = document.querySelector(".hamburger");
let CloseBar = document.querySelector(".close");
let MobNav = document.querySelector(".mobile-nav");

hamberger.addEventListener("click", function () {
  MobNav.classList.add("open");
});

CloseBar.addEventListener("click", function () {
  MobNav.classList.remove("open");
});
