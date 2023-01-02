window.addEventListener("load", () => {
  contactHeight();
});
window.addEventListener("resize", () => {
  contactHeight();
});

function contactHeight() {
  let contactSection = document.querySelector("section.contact");
  let margin = -contactSection.offsetHeight / 2 + "px";
  contactSection.style.marginBottom = margin;
}
window.onload = function () {
  leftAnimation();
  contactAnimation();
};
window.onscroll = function () {
  leftAnimation();
  contactAnimation();
};

function leftAnimation(){
  let leftItem = document.querySelectorAll(
    ".split section.side  > *:not(:first-child)"
  );
  for (let i = 0; i < leftItem.length; i++) {
    // Check if it already was marked visible to avoid constant calls on the function on scroll
    if (!leftItem[i].classList.contains("visible"))
      if (checkVisibility(leftItem[i])) leftItem[i].classList.add("visible");
  }
}
function contactAnimation() {
  var contact = document.querySelector("section.contact");
  // If the `section.contact` element does not have the `animation` class
  if (!contact.classList.contains("animation")) {
    // Check if the `section.contact` element is visible on the screen
    // and add the `animation` class if it is
    if (checkVisibility(contact)) {
      contact.classList.add("animation");
    }
  }
}

// Function to check if an element is fully visible on the screen
function checkVisibility(elm) {
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

  // Return `true` if the element is at least 30% visible, and `false` otherwise
  return visiblePercentage >= 30;
}