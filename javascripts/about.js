import "./_header";
import "./_dropdown";
import "./_footerDropdown.js";

window.onload = function () {
  formAnimation();
}
window.onscroll = function () {
  formAnimation();
};
function formAnimation() {
  var form = document.querySelector("main.contact form");
  if (checkVisible(form)) form.classList.add("animation");
}
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}