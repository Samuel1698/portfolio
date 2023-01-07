var contact = document.querySelector("section.contact");
var leftItem = document.querySelectorAll(".split section.side > .right");
var button = document.querySelectorAll("button.top");
var contactSection = document.querySelector("section.contact");

window.addEventListener("resize", () => {
  contactHeight();
});
window.onload = function () {
  contactHeight();
  leftAnimation();
  contactAnimation();
  button[0].addEventListener("click", returnToTop);
  button[1].addEventListener("click", returnToTop);
};
// -----------------------------------------------------------------------------
// debounce function by chatGPT to delay the execution of code on the scroll 
// eventListener
// 100ms is a big enough delay that the 'returnToTop' works properly
// and small enough that the event listener still works as intended
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
// -----------------------------------------------------------------------------
window.addEventListener("scroll", debounce(function () {
  leftAnimation();
  contactAnimation();
}, 100));
// -----------------------------------------------------------------------------
// Automatically scrolls the user to the top
// -----------------------------------------------------------------------------
function returnToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  resetAnimations();
}
function resetAnimations() {
  for (let i = 0; i < leftItem.length; i++) {
    leftItem[i].classList.remove("visible");
  }
}
function contactHeight() {
  let margin = -contactSection.offsetHeight / 2 + "px";
  contactSection.style.marginBottom = margin;
}

function leftAnimation() {
  for (let i = 0; i < leftItem.length; i++) {
    // Check if it already was marked visible to avoid constant calls on the function on scroll or if it's being reset by another function
    if (!leftItem[i].classList.contains("visible"))
      if (checkVisibility(leftItem[i], 25))
        leftItem[i].classList.add("visible");
  }
}
function contactAnimation() {
  // If the `section.contact` element does not have the `animation` class
  if (!contact.classList.contains("animation")) {
    // Check if the `section.contact` element is visible on the screen
    // and add the `animation` class if it is
    if (checkVisibility(contact, 0)) {
      contact.classList.add("animation");
    }
  }
}

// Function to check if an element is fully visible on the screen
function checkVisibility(elm, prct) {
  // Get the bounding rect for the element
  var rect = elm.getBoundingClientRect();

  // Calculate the area of the element
  var elementArea = rect.width * rect.height;

  // Calculate the visible width and height
  var visibleWidth =
    Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
  var visibleHeight =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

  // Calculate the visible area
  var visibleArea = visibleWidth * visibleHeight;

  // Calculate the percentage of the element that is visible
  var visiblePercentage = (visibleArea / elementArea) * 100;

  // Return `true` if the element is at least x% visible, and `false` otherwise
  return visiblePercentage >= prct;
}
