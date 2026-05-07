document.getElementById("year").innerText = new Date().getFullYear();
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("nav");
menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("nav--open");
});