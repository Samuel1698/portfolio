const toggleButton = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");
const overlay = document.querySelector("header .overlay");
const buttons = document.querySelectorAll("button.category");
const body = document.querySelector("body");

// Update the variable --collapsedHeight
// This is subtracted from the viewHeight and 58px to get the total viewable menu
function updateMenuHeight(elm, called){
  // If the element is NOT closed, it is about to be closed by the click that triggered this function
  // So add it's height to the variable
  if (called == "before")
    totalHeight += elm.offsetHeight;
  // If the element has been toggled on
  else if (called == "after")
    totalHeight -= elm.offsetHeight;
  menu.style.setProperty("--collapsedHeight", totalHeight + "px");
}

function toggleVisibility(){
  menu.classList.toggle("visible");
  overlay.classList.toggle("visible");
  body.classList.toggle("no-scroll");
}
toggleButton.addEventListener("click", toggleVisibility);
overlay.addEventListener("click", toggleVisibility);

// Default category values
let totalHeight = 0;
// Category collapse
for (let i=0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    let sub = buttons[i].nextElementSibling;
    updateMenuHeight(sub, "before");
    buttons[i].querySelector("img").classList.toggle("closed");
    sub.classList.toggle("closed");  
    updateMenuHeight(sub, "after");
  });
}

