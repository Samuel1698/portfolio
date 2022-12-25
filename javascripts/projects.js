import "./_footerDropdown.js";
import "./_worklist";

window.addEventListener("load", () => {
  contactHeight();
});
window.addEventListener("resize", () => {
  contactHeight();
});

function contactHeight() {
  let contactSection = document.querySelector("section.contact");
  let margin = -contactSection.offsetHeight / 2 + "px";
  contactSection.style.marginBottom = margin;
}
