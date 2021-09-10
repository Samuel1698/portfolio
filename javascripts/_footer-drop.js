var button = document.querySelector("footer button.select-button");
var ul = document.querySelector("footer ul.select-items");
var li = ul.querySelectorAll("li.select-item");

button.addEventListener("click", function(e){
  e.stopPropagation();
  // Toggle select-hide on click
  ul.classList.toggle("select-hide");
  button.classList.toggle("select-arrow-active");
});
document.addEventListener("click", function(){
  // Hide the selection box
  ul.classList.add("select-hide");
  button.classList.remove("select-arrow-active");
})

for (let i = 0; i < li.length; i++){
  li[i].addEventListener("click", function(e){
    e.stopPropagation();
    button.querySelector("span").innerHTML = this.innerHTML;
    let selected = this.parentElement.getElementsByClassName("same-as-selected");
    for (k = 0; k < selected.length; k++) {
      // Reset the 'same as selected' class
      selected[k].classList.remove("same-as-selected");
    }
    this.classList.add("same-as-selected");
    this.parentElement.classList.toggle("select-hide");
    // Redirect to subdomain on button click depending on the clicked li
  })
}