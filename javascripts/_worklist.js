var item = document.querySelectorAll(".flex_wrapper .item .link");
document.addEventListener("mousemove", function checkHover() {
  for (let i = 0; i < item.length; i++) {
    item[i].matches(":hover") || item[i].nextElementSibling.matches(":hover")
      ? item[i].parentNode.classList.add("hover")
      : item[i].parentNode.classList.remove("hover");
  }
});
document.addEventListener("keyup", function (e) {
  if (e.code === "Tab") {
    for (let i = 0; i < item.length; i++) {
      item[i].matches(":focus-visible")
        ? item[i].parentNode.classList.add("focus")
        : item[i].parentNode.classList.remove("focus");
    }
  }
});
var expand = document.querySelectorAll(".bar .expand");
for (let i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function () {
    this.parentNode.parentNode.classList.toggle("toggle");
    this.classList.toggle("on");
  });
}
const pinkwugListener = function(e) {
  window.location = "/pinkwug.html";
}
const miguelListener = function(e) {
  window.location = "/miguelgarbageremoval.html";
}
document.querySelector(".pinkwug .hidden").addEventListener("click", pinkwugListener);
document.querySelector(".miguel .hidden").addEventListener("click", miguelListener);
