window.onload = function () {
  ulAnimation();
  workItemAnimation();
};
window.onscroll = function () {
  ulAnimation();
  workItemAnimation();
};
function ulAnimation() {
  var ul = document.querySelectorAll(
    "main section.column ul"
  );
  for (let i = 0; i < ul.length; i++) {
    if (checkVisible(ul[i])) ul[i].classList.add("animation");
  }
}
function workItemAnimation(){
  var WorkItem = document.querySelectorAll(".work.container .item");
  for (let i = 0; i < WorkItem.length; i++) {
    if (checkVisible(WorkItem[i])) WorkItem[i].classList.add("animation");
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