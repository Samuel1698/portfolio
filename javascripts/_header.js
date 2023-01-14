const toggleButtons = document.querySelectorAll("header .menu-toggle");
const menu = document.querySelector("header .menu");
const overlay = document.querySelector("header .overlay");
const buttons = document.querySelectorAll("header button.category");
const body = document.querySelector("body");

function toggleVisibility(e){
  e.preventDefault();
  e.stopPropagation();
  menu.classList.toggle("visible");
  overlay.classList.toggle("visible");
  toggleButtons[0].classList.toggle("visible");
  toggleButtons[1].classList.toggle("visible");
  body.classList.toggle("no-scroll");
  // Aria expanded toggle
  menu.setAttribute("aria-expanded", menu.getAttribute("aria-expanded") === "true" ? "false" : "true");
}
toggleButtons[0].addEventListener("click", function(e){
  toggleVisibility(e);
});
toggleButtons[1].addEventListener("click", function(e){
  toggleVisibility(e);
});
overlay.addEventListener("click", function(e){
  toggleVisibility(e);
});

toggleButtons[0].addEventListener("touchend", function(e){
  toggleVisibility(e);
}, false);
toggleButtons[1].addEventListener("touchend", function(e){
  toggleVisibility(e);
}, false);
overlay.addEventListener("touchend", function(e){
  toggleVisibility(e);
}, false);

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

// Default category values
let totalHeight = 0;
// Category collapse
for (let i=0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    let sub = buttons[i].nextElementSibling;
    updateMenuHeight(sub, "before");
    let svg = buttons[i].querySelector("svg");
    let hasClass = svg.getAttribute("class");
    hasClass ? svg.removeAttribute("class") : svg.setAttribute("class", "closed");
    sub.classList.toggle("closed");  
    updateMenuHeight(sub, "after");
  });
}

