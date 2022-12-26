import "./_header";
import "./_footerDropdown.js";
import "./_customHeights";
// Prepend necessary since we're referencing the same event listener function
// @prepros-prepend "./_worklist";

document
  .querySelector(".pinkwug .hidden")
  .removeEventListener("click", pinkwugListener);
document
  .querySelector(".portfolio .hidden")
  .removeEventListener("click", portfolioListener);

window.addEventListener("load", () => {
  var expand = document.querySelectorAll(".bar .expand");
  for (let i = 0; i < expand.length; i++) {
    expand[i].parentNode.parentNode.classList.toggle("toggle");
    expand[i].classList.toggle("on");
  }
});
