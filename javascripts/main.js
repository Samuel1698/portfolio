document.querySelector(".cert ul").addEventListener("click", function(event){
  window.history.pushState("", "", '?' + event.target.classList[0]);
  // window.location.search.substring(1)
});