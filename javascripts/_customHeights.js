//This code sets up event listeners that call two functions, contactHeight and workItemHeight, when the page loads or when the window is resized. The contactHeight function vertically centers the section.contact element on the page, while the workItemHeight function sets the minHeight property of all section.work .item elements to the same value. This ensures that the elements have consistent heights, regardless of the content they contain.

window.addEventListener("load", ()=> {
  contactHeight();
  workItemHeight();
});
window.addEventListener("resize", ()=> {
  contactHeight();
  workItemHeight();
});

function contactHeight() {
  let contactSection = document.querySelector("section.contact");
  let margin = - contactSection.offsetHeight / 2 + "px"
  contactSection.style.marginBottom = margin;
}
function workItemHeight(){
  let workItem = document.querySelectorAll("section.work .item");
  let bar = workItem[0].querySelector(".bar");
  let img = workItem[0].querySelector(".link");
  // Calculate the height of image and bar
  let newHeight = bar.offsetHeight + (img.offsetWidth * 9) / 16 + "px";
  // Loop through all of the selected elements with the class "item"
  for (let i = 0; i < workItem.length; i++) {
    workItem[i].style.minHeight = newHeight;
  }
}