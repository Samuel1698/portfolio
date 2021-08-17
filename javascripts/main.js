document.querySelector(".cert ul").addEventListener("click", function(event){
  window.history.pushState("", "", '?' + event.target.classList[0]);
  // window.location.search.substring(1)
});
 
const item = document.querySelectorAll('.flex_wrapper .item');
document.addEventListener('mousemove', function checkHover() {
  for (let i=0; i < item.length; i++){
    if (item[i].matches(':hover') ){
      item[i].classList.add('hover');
    }
    else {
      item[i].classList.remove('hover');
    }
  }
});