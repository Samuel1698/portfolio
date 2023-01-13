// ----------------------------------------------------------
// Certificate carousel
// ----------------------------------------------------------
const columns = document.querySelector(".columns");
const listItem = document.querySelectorAll(".cert ul li");
const overlay = columns.querySelector(".overlay");
const closeBtn = columns.querySelector("button.close");
const wrapper = overlay.querySelector(".wrapper");
const img =     overlay.querySelectorAll(".wrapper img");
const button =   overlay.querySelectorAll(".arrow");
const p = overlay.querySelector("p.description");
const x = overlay.querySelector("nav .x");
const fig = overlay.querySelector(".nav-description figcaption a");

overlay.querySelector("nav .y").innerHTML = img.length;

closeBtn.addEventListener("click", function () {
  // Reset all classes that could be added
  overlay.classList.remove("active");
  columns.classList.remove("container");
  fig.tabIndex = -1;
  for (let i = 0; i < img.length; i++) {
    img[i].tabIndex = -1;
    img[i].classList.remove("active", "after");
  }
  button[0].classList.remove("disabled");
  button[0].tabIndex = -1;
  button[1].classList.remove("disabled");
  button[1].tabIndex = -1;

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].tabIndex = 0;
  }
});
document.querySelector(".cert ul").addEventListener("click", function (e) {
  activateOverlay(e);
});
document.querySelector(".cert ul").addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    activateOverlay(e);
  }
});
// Update the 'x of y' numbers
function updateCounter(index){
  x.innerText = index + 1; //indexed at 0 by default
  p.innerText = img[index].dataset.description;
  fig.href = img[index].dataset.link;
  wrapper.href = img[index].dataset.link;
}
// Switch the certificate shown to the previous one
function previousImage(event) {
  // Reset the other button
  button[1].classList.remove("disabled");
  // Stop overlay click action
  event.stopPropagation();
  let index = detectActive();
  if (index !== 0) {
    button[1].tabIndex = 0;
    resetClasses(index);
    assignClasses(index - 1);
    updateCounter(index - 1);
  }
}
// Switch the certificate shown to the next one
function nextImage(event) {
  // Reset the other button
  button[0].classList.remove("disabled");
  // Stop overlay click action
  event.stopPropagation();
  let index = detectActive();
  if (index !== img.length - 1) {
    button[0].tabIndex = 0;
    resetClasses(index);
    assignClasses(index + 1);
    updateCounter(index + 1);
  }
}
// Add 'click' event to the button
button[0].addEventListener("click", (event) => {
  previousImage(event);
});
// Add 'left arrow' key press
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    previousImage(event);
  }
});
// Add 'click' event to the button
button[1].addEventListener("click", function (event) {
  nextImage(event);
});
// Add 'right arrow' key press 
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextImage(event);
  }
});

// Detect which image is the current active one
function detectActive() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains("active") && img[i].classList.contains("front")) {
      var index = i;
      break;
    }
  }
  return index;
}
// Completely reset all the active classes for the images
function resetClasses(i) {
  if (img[i - 1]) {
    img[i - 1].classList.remove("active");
  }
  if (img[i]) {
    img[i].tabIndex = -1;
    img[i].classList.remove("active", "front");
  }
  if (img[i + 1]) {
    img[i + 1].classList.remove("active", "after");
  }
}
// Assigns active classes based on the image index
function assignClasses(i) {
  img[i].tabIndex = 0;
  img[i].classList.add("active", "front");
  // If the image before the 'front' one doesn't exists, disable the button
  if (img[i - 1]) {
    img[i - 1].classList.add("active");
  } else {
    button[0].classList.add("disabled");
    // First image bug is here
    setTimeout(() => {
      button[0].tabIndex = -1;
    }, 100);
  }
  // If the image after the 'front' one doesn't exists, disable the button
  if (img[i + 1]) {
    img[i + 1].classList.add("active", "after");
  } else {
    button[1].classList.add("disabled");
    button[1].tabIndex = -1;
  }
}
function activateOverlay(e) {
  // Activate overlay on click and enter
  overlay.classList.add("active");
  columns.classList.add("container");
  fig.tabIndex = 0;
  button[0].tabIndex = 0;
  button[1].tabIndex = 0;
  // Change tabindex of all list items
  for (let i = 0; i < listItem.length; i++) {
    listItem[i].tabIndex = -1;
  }
  // Add active state to corresponding certificate
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function (event) {
      event.stopPropagation();
    });
    // Detect which list item was clicked
    if (img[i].classList[0] == e.target.classList[0]) {
      assignClasses(i);
      updateCounter(i);
    }
  }
  // Add event listener to the image border to stop propagation to the overlay
  document
    .querySelector(".img-border")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });
}
