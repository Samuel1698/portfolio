window.onload = function () {
  ulAnimation();
}
window.onscroll = function () {
  ulAnimation();
};
function ulAnimation(){
  var ul = document.querySelectorAll(
    "main section.skills ul, main section.languages ul"
  );
  for (let i = 0; i < ul.length; i++) {
    checkVisible(ul[i])
      ? ul[i].setAttribute("class", "animation")
      : ul[i].removeAttribute("class");
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
