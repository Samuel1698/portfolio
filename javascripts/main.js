const overlay = document.querySelector('.columns .overlay');
const img = overlay.querySelectorAll('img');

overlay.addEventListener('click', function(){
  this.classList.remove('active');
  for (let i=0; i < img.length; i++){
    img[i].classList.remove('active');
  }
});
document.querySelector(".cert ul").addEventListener("click", function(e){
  activateOverlay(e);
}); 
// Reset active states

function activateOverlay(e){
  // Also need to target pressing Enter on the element lol
  
  // Activate overlay on click and enter
  overlay.classList.add("active");
  // Add active state to corresponding certificate
  for (let i=0; i < img.length; i++){
    if (img[i].classList[0] == e.target.classList[0]){
      img[i].classList.add('active');
      img[i].addEventListener('click', function(event){
        event.stopPropagation();
      })
    }
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