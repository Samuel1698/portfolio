const overlay = document.querySelector('.columns .overlay');
const img     = overlay.querySelectorAll('img');
const buttons = document.querySelectorAll('.overlay .arrow');

overlay.addEventListener('click', function(){
  this.classList.remove('active');
  for (let i=0; i < img.length; i++){
    img[i].classList.remove('active', 'before', 'after');
  }
});
document.querySelector(".cert ul").addEventListener("click", function(e){
  activateOverlay(e);
});

function activateOverlay(e){  
  // Activate overlay on click and enter
  overlay.classList.add("active");
  // Add active state to corresponding certificate
  for (let i=0; i < img.length; i++){
    if (img[i].classList[0] == e.target.classList[0]){
      img[i].classList.add('active');
      img[i].tabIndex = 0;
      if (img[i - 1]){
        img[i - 1].classList.add('active', 'before');
      }
      if (img[i + 1]){
        img[i + 1].classList.add('active', 'after');
      }
      // Add event listener to the image to stop propagation to the overlay
      img[i].addEventListener('click', function(event){
        event.stopPropagation();
      });
    }
  }
  for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
      // Stop overlay click action
      event.stopPropagation();
      // Switch the certificate shown

    });
  }
};
 
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