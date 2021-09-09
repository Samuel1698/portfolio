var workItem = document.querySelectorAll("section.work .item");
let bar = workItem[0].querySelector(".bar");
let img = workItem[0].querySelector(".link");
// Calculate the height of image and bar
let newHeight = bar.offsetHeight + (img.offsetWidth * 9/16) + "px";
for (let i=0; i < workItem.length; i++){
  workItem[i].style.minHeight = newHeight;
}