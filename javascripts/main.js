// ----------------------------------------------------------
// Certificate carousel
// ----------------------------------------------------------
const overlay = document.querySelector('.columns .overlay');
const img     = overlay.querySelectorAll('img');
const button  = document.querySelectorAll('.overlay .arrow');

overlay.addEventListener('click', function(){
  // Reset all classes that could be added
  this.classList.remove('active');
  overlay.querySelector('.wrapper').classList.remove("active");
  for (let i=0; i < img.length; i++){
    img[i].tabIndex = -1;
    img[i].classList.remove('active', 'before', 'after');
  }
  button[0].classList.remove('disabled');
  button[0].tabIndex = -1;
  button[1].classList.remove('disabled');
  button[1].tabIndex = -1;
});
document.querySelector(".cert ul").addEventListener("click", function(e){
  activateOverlay(e);
});
// Switch the certificate shown to the previous one
button[0].addEventListener('click', function(event){
  // Stop overlay click action
  button[1].classList.remove('disabled');
  event.stopPropagation();
  let index = detectActive();
  if (index !== 0) {
    button[1].tabIndex = 0;
    resetClasses(index);
    assignClasses(index - 1);
  }
});
// Switch the certificate shown to the next one
button[1].addEventListener('click', function(event){
  // Stop overlay click action
  button[0].classList.remove('disabled');
  event.stopPropagation();
  let index = detectActive();
  if (index !== (img.length - 1)) {
    button[0].tabIndex = 0;
    resetClasses(index);
    assignClasses(index + 1);
  }
});
// Detect which image is the current active one
function detectActive(){
  for (let i=0; i < img.length; i++){
    if (img[i].classList.contains('active') && img[i].classList.length == 2){
      var index = i;
      break;
    }
  }
  return index;
}
// Completely reset all the active classes for the images
function resetClasses(i){
  if (img[i - 1]){
    img[i - 1].classList.remove('active', 'before');
  }
  if (img[i]){
    img[i].tabIndex = -1;
    img[i].classList.remove('active');
  }
  if (img[i + 1]){
    img[i + 1].classList.remove('active','after');
  }
}
// Assigns active classes based on the image index
function assignClasses(i){
  img[i].tabIndex = 0;
  img[i].classList.add('active');
  if (img[i - 1]) {
    img[i - 1].classList.add('active', 'before');
  }
  else {
    button[0].classList.add('disabled');
    button[0].tabIndex = -1;
  }
  if (img[i + 1]) {
    img[i + 1].classList.add('active', 'after');
  }
  else {
    button[1].classList.add('disabled');
    button[1].tabIndex = -1;
  }
};
function activateOverlay(e){  
  // Activate overlay on click and enter
  overlay.classList.add("active");
  overlay.querySelector('.wrapper').classList.add("active");
  button[0].tabIndex = 0;
  button[1].tabIndex = 0;
  // Add active state to corresponding certificate
  for (let i=0; i < img.length; i++){
    if (img[i].classList[0] == e.target.classList[0]){
      assignClasses(i);
      // Add event listener to the image to stop propagation to the overlay
      img[i].addEventListener('click', function(event){
        event.stopPropagation();
      });
    }
  }
};

// ----------------------------------------------------------

// ----------------------------------------------------------
const item = document.querySelectorAll('.flex_wrapper .item');
document.addEventListener('mousemove', function checkHover() {
  for (let i=0; i < item.length; i++){
    if (item[i].matches(':hover')){
      item[i].classList.add('hover');
    }
    else {
      item[i].classList.remove('hover');
    }
  }
});
document.addEventListener('keydown', function(e){
  if (e.keyCode == 9) {
    for (let i=0; i < item.length; i++){
      if (item[i].querySelector('.link').matches(':focus-visible')){
        item[i].classList.add('hover');
      }
      else {
        item[i].classList.remove('hover');
      }
    }
  }
});
document.querySelector('.pinkwug .hidden').addEventListener('click', function(e){
  if (!e.target.matches('span') || !e.target.matches('p') || !e.target.matches('a')) {
    window.open('https://pinkwug.live');
  }
});