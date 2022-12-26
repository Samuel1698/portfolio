const toggleButton = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");
const overlay = document.querySelector("header .overlay");

function toggleVisibility(){
  menu.classList.toggle("visible");
  overlay.classList.toggle("visible");
}
toggleButton.addEventListener("click", toggleVisibility);
overlay.addEventListener("click", toggleVisibility);

