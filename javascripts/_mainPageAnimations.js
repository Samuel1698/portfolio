window.onload = function () {
  ulAnimation();
  workItemAnimation();
  contactAnimation();
};
window.onscroll = function () {
  ulAnimation();
  workItemAnimation();
  contactAnimation();
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
  var WorkItem = document.querySelectorAll(".work .item");
  for (let i = 0; i < WorkItem.length; i++) {
    if (checkVisible(WorkItem[i])) WorkItem[i].classList.add("animation");
  }
}
function contactAnimation() {
  var contact = document.querySelector("section.contact");
  if (checkVisible(contact)) contact.classList.add("animation");
}
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}