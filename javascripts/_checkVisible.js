window.onload = function () {
  ulAnimation();
  // preventAnimation();
};
window.onscroll = function () {
  ulAnimation();
};
function preventAnimation() {
  var ul = document.querySelectorAll(
    "main section.column ul"
  );
  for (let i = 0; i < ul.length; i++) {
    if (checkVisible(ul[i])) ul[i].setAttribute("class", "loaded");
  }
}
function ulAnimation() {
  var ul = document.querySelectorAll(
    "main section.column ul"
  );
  for (let i = 0; i < ul.length; i++) {
    if (checkVisible(ul[i])) ul[i].classList.add("animation");
  }
}
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
