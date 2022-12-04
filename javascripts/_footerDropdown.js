var submit = document.querySelector("footer button.applyChanges");
var button = document.querySelector("footer button.select-button");
var ul = document.querySelector("footer ul.select-items");
var li = ul.querySelectorAll("li.select-item");

button.addEventListener("click", function (e) {
  e.stopPropagation();
  // Toggle select-hide on click
  ul.classList.toggle("select-hide");
  button.classList.toggle("select-arrow-active");
  // Set aria-expanded to true
  button.setAttribute("aria-expanded", "true");
});
document.addEventListener("click", function () {
  // Hide the selection box
  ul.classList.add("select-hide");
  button.classList.remove("select-arrow-active");
  // Set aria-expanded to false
  button.setAttribute("aria-expanded", "false");
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
      // Display the submit button
      submit.removeAttribute("style");
    }
  }
  if (e.key == "Enter" || e.key == "Tab") {
    e.stopPropagation();
    //  Hide the selection box
    ul.classList.add("select-hide");
    button.classList.remove("select-arrow-active");
    // Set aria expanded to false
    button.setAttribute("aria-expanded", "false");
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
    // Hide the selection box
    this.parentElement.classList.toggle("select-hide");
    button.classList.remove("select-arrow-active");
    // Set aria expanded to false
    button.setAttribute("aria-expanded", "false");
    // Display the submit button
    submit.removeAttribute("style");
    // Assign 'shown' class depending on which list item is selected
    changeLang(this);
    // Redirect to subdomain on button click depending on the clicked li
  });
}
function changeLang(element) {
  if (element.querySelector("span").innerText == "ES") {
    submit.querySelector("span.text").innerText = "Aplicar Cambio"
  }
  else if (element.querySelector("span").innerText == "EN"){
    submit.querySelector("span.text").innerText = "Save Change"
  }
}
submit.addEventListener("click", function () {
  // Get the current URL
  var currentURL = window.location.href;
  // Parse the URL to extract the subdomain, domain, and top-level domain
  var urlParts = currentURL.split(".");
  var subdomain = urlParts[0];
  var domain = urlParts[1];
  var tld = urlParts[2];
  // Modify the subdomain as needed
  if (submit.querySelector("span.text").innerText == "Aplicar Cambio"){
    var newSubdomain = "es";
  }
  else if (submit.querySelector("span.text").innerText == "Save Change") {
    var newSubdomain = "en";
  }
  // Rebuild the URL with the modified subdomain
  var newURL = newSubdomain + "." + domain + "." + tld;
  // Update the location of the current page to the new URL
  console.log(newURL);
  // window.location.href = newURL;
});