var submit = document.querySelector("footer button[type='submit']");
var button = document.querySelector("footer button.select-button");
var ul = document.querySelector("footer ul.select-items");
var li = ul.querySelectorAll("li.select-item");

button.addEventListener("click", function (e) {
  e.stopPropagation();
  // Toggle select-hide on click
  ul.classList.toggle("select-hide");
  button.classList.toggle("select-arrow-active");
});
document.addEventListener("click", function () {
  // Hide the selection box
  ul.classList.add("select-hide");
  button.classList.remove("select-arrow-active");
});
button.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp" || e.key == "ArrowDown") {
    e.preventDefault();
    // Move selection up and down with corresponding arrow key
    for (let i = 0; i < li.length; i++) {
      if (e.key == "ArrowUp" && li[i - 1]) {
        this.querySelector("span").innerHTML = li[i - 1].innerHTML;
        changeLang(li[i - 1]);
      }
      if (e.key == "ArrowDown" && li[i + 1]) {
        this.querySelector("span").innerHTML = li[i + 1].innerHTML;
        changeLang(li[i + 1]);
      }
      let selected = this.parentElement.querySelector(".same-as-selected");
      selected.classList.remove("same-as-selected");
      for (k = 0; k < li.length; k++) {
        if (this.querySelector("span").innerHTML == li[k].innerHTML) {
          li[k].classList.add("same-as-selected");
        }
      }
    }
  }
  if (e.key == "Enter" || e.key == "Tab") {
    e.stopPropagation();
    //  Hide the selection box
    ul.classList.add("select-hide");
    button.classList.remove("select-arrow-active");
  }
  if (e.key == "Enter") {
    e.preventDefault();
  }
});
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function (e) {
    e.stopPropagation();
    // Make the contents the same
    button.querySelector("span").innerHTML = this.innerHTML;
    // Change the classes of the submit button spans
    // submit.querySelector(".button_wrap span")
    let selected =
      this.parentElement.getElementsByClassName("same-as-selected");
    for (k = 0; k < selected.length; k++) {
      // Reset the 'same as selected' class
      selected[k].classList.remove("same-as-selected");
    }
    this.classList.add("same-as-selected");
    this.parentElement.classList.toggle("select-hide");
    button.classList.remove("select-arrow-active");
    // Assign 'shown' class depending on which list item is selected
    changeLang(this);
    // Redirect to subdomain on button click depending on the clicked li
  });
}
function changeLang(element) {
  if (element.querySelector("span").innerText == "ES") {
    submit.querySelector(".ES").classList.add("shown");
    submit.querySelector(".EN").classList.remove("shown");
  }
  else if (element.querySelector("span").innerText == "EN"){
    submit.querySelector(".EN").classList.add("shown");
    submit.querySelector(".ES").classList.remove("shown");
  }
}
