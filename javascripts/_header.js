const toggleButton = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");
const overlay = document.querySelector("header .overlay");
const body = document.querySelector("body");

function toggleVisibility(){
  menu.classList.toggle("visible");
  overlay.classList.toggle("visible");
  body.classList.toggle("no-scroll");
}
toggleButton.addEventListener("click", toggleVisibility);
overlay.addEventListener("click", toggleVisibility);

