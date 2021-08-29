// ----------------------------------------------------------
// Previous work
// ----------------------------------------------------------
const item = document.querySelectorAll(".flex_wrapper .item");
document.addEventListener("mousemove", function checkHover() {
  for (let i = 0; i < item.length; i++) {
    if (item[i].matches(":hover")) {
      item[i].classList.add("hover");
    } else {
      item[i].classList.remove("hover");
    }
  }
});
document.addEventListener("keydown", function (e) {
  if (e.code === "Tab") {
    for (let i = 0; i < item.length; i++) {
      if (item[i].querySelector(".link").matches(":focus-visible")) {
        item[i].classList.add("hover");
      } else {
        item[i].classList.remove("hover");
      }
    }
  }
});
document
  .querySelector(".pinkwug .hidden")
  .addEventListener("click", function (e) {
    if (
      !e.target.matches("span") ||
      !e.target.matches("p") ||
      !e.target.matches("a")
    ) {
      window.open("https://pinkwug.live");
    }
  });
