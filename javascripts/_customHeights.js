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
  for (let i = 0; i < workItem.length; i++) {
    workItem[i].style.minHeight = newHeight;
  }
}