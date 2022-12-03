// ----------------------------------------------------------
// Certificate carousel
// ----------------------------------------------------------
const overlay = document.querySelector(".columns .overlay");
const img = overlay.querySelectorAll("img");
const wrapper = overlay.querySelector(".wrapper");
const button = document.querySelectorAll(".overlay .arrow");
const listItem = document.querySelectorAll(".cert ul li");
const closeBtn = wrapper.querySelector(".close");

overlay.addEventListener("click", function () {
  // Reset all classes that could be added
  this.classList.remove("active");
  wrapper.classList.remove("active");
  for (let i = 0; i < img.length; i++) {
    img[i].tabIndex = -1;
    img[i].classList.remove("active", "before", "after");
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

// Switch the certificate shown to the previous one
function previousImage(event) {
  // Reset the other button
  button[1].classList.remove("disabled");
  // Stop overlay click action
  event.stopPropagation();
  let index = detectActive();
  if (index !== 0) {
    // Toggle visibility of close button while transition happens
    closeBtn.classList.toggle("hide");
    // Add pressed class to button
    button[0].classList.add("pressed");
    setTimeout(function () {
      button[0].classList.remove("pressed");
    }, 500);
    setTimeout(function () {
      closeBtn.classList.toggle("hide");
    }, 1000);
    button[1].tabIndex = 0;
    resetClasses(index);
    assignClasses(index - 1);
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
    // Toggle visibility of close button while transition happens
    closeBtn.classList.toggle("hide");

    // Add pressed class to button
    button[1].classList.add("pressed");
    setTimeout(function () {
      button[1].classList.remove("pressed");
    }, 500);
    setTimeout(function () {
      closeBtn.classList.toggle("hide");
    }, 1000);
    button[0].tabIndex = 0;
    resetClasses(index);
    assignClasses(index + 1);
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
    if (img[i].classList.contains("active") && img[i].classList.length == 2) {
      var index = i;
      break;
    }
  }
  return index;
}
// Completely reset all the active classes for the images
function resetClasses(i) {
  if (img[i - 1]) {
    img[i - 1].classList.remove("active", "before");
  }
  if (img[i]) {
    img[i].tabIndex = -1;
    img[i].classList.remove("active");
  }
  if (img[i + 1]) {
    img[i + 1].classList.remove("active", "after");
  }
}
// Assigns active classes based on the image index
function assignClasses(i) {
  img[i].tabIndex = 0;
  img[i].classList.add("active");
  if (img[i - 1]) {
    img[i - 1].classList.add("active", "before");
  } else {
    button[0].classList.add("disabled");
    button[0].tabIndex = -1;
  }
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
  wrapper.classList.add("active");
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
    if (img[i].classList[0] == e.target.classList[0]) {
      assignClasses(i);
    }
  }
  // Add event listener to the image border to stop propagation to the overlay
  document
    .querySelector(".img-border")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });
}
