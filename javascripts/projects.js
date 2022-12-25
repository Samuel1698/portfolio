import "./_footerDropdown.js";
// @prepros-prepend "./_worklist";

document
  .querySelector(".pinkwug .hidden")
  .removeEventListener("click", pinkwugListener);
document
  .querySelector(".portfolio .hidden")
  .removeEventListener("click", portfolioListener);

window.addEventListener("load", () => {
  contactHeight();
  var expand = document.querySelectorAll(".bar .expand");
  for (let i = 0; i < expand.length; i++) {
    expand[i].parentNode.parentNode.classList.toggle("toggle");
    expand[i].classList.toggle("on");
  }
});
window.addEventListener("resize", () => {
  contactHeight();
});

function contactHeight() {
  let contactSection = document.querySelector("section.contact");
  let margin = -contactSection.offsetHeight / 2 + "px";
  contactSection.style.marginBottom = margin;
}
