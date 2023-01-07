// -----------------------------------------------------------------------------
// debounce function by chatGPT to delay the execution of code on the scroll
// eventListener
// -----------------------------------------------------------------------------
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.onload = function () {
  ulAnimation();
  workItemAnimation();
  contactAnimation();
};
window.onscroll = debounce(function () {
  ulAnimation();
  workItemAnimation();
  contactAnimation();
}, 100);

function ulAnimation() {
  var ul = document.querySelectorAll("main section.column ul");
  for (let i = 0; i < ul.length; i++) {
    // If the `ul` element does not have the `animation` class
    if (!ul[i].classList.contains("animation")) {
      // Check if the `ul` element is visible on the screen
      // and add the `animation` class if it is
      if (checkVisible(ul[i])) {
        ul[i].classList.add("animation");
      }
    }
  }
}
function workItemAnimation() {
  var WorkItem = document.querySelectorAll(".work .item");
  // Loop through each `.work .item` element
  for (let i = 0; i < WorkItem.length; i++) {
    // If the `.work .item` element does not have the `animation` class
    if (!WorkItem[i].classList.contains("animation")) {
      // Check if the `.work .item` element is visible on the screen
      // and add the `animation` class if it is
      if (checkVisible(WorkItem[i])) {
        WorkItem[i].classList.add("animation");
      }
    }
    if (!WorkItem[i].classList.contains("v")) {
      if (checkFullyVisible(WorkItem[i])) {
        WorkItem[i].classList.add("v");
        setTimeout(() => {
          WorkItem[i].classList.add("toggle");
          WorkItem[i].querySelector(".expand").classList.add("on");
          setTimeout(() => {
            WorkItem[i].classList.remove("toggle");
            WorkItem[i].querySelector(".expand").classList.remove("on");
          }, 4500);
        }, 2000);
      }
    }
  }
}
function contactAnimation() {
  var contact = document.querySelector("section.contact");
  // If the `section.contact` element does not have the `animation` class
  if (!contact.classList.contains("animation")) {
    // Check if the `section.contact` element is visible on the screen
    // and add the `animation` class if it is
    if (checkVisible(contact)) {
      contact.classList.add("animation");
    }
  }
}
// Function to check if an element is visible on the screen
function checkVisible(elm) {
  // Get the bounding rect for the element
  var rect = elm.getBoundingClientRect();
  // Get the maximum of the document element's client height and the window's inner height
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  // Return `true` if the element is not fully off the top or bottom of the screen and `false` otherwise
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
// Function to check if an element is fully visible on the screen
function checkFullyVisible(elm) {
  // Get the bounding rect for the element
  var rect = elm.getBoundingClientRect();
  // Return `true` if the element is fully within the viewport and `false` otherwise
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}
