window.addEventListener("DOMContentLoaded", ()=> {
  adjustHeight();
});
window.addEventListener("resize", ()=> {
  adjustHeight();
});

function adjustHeight() {
  var contactSection = document.querySelector("section.contact");
  let margin = - contactSection.offsetHeight / 2 + "px"
  contactSection.style.marginBottom = margin;
}
