document.querySelector(".cert ul").addEventListener("click",(function(e){window.history.pushState("","","?"+e.target.classList[0])}));const item=document.querySelectorAll(".flex_wrapper .item");document.addEventListener("mousemove",(function(){for(let e=0;e<item.length;e++)item[e].matches(":hover")?item[e].classList.add("hover"):item[e].classList.remove("hover")})),document.addEventListener("keydown",(function(e){if(9==e.keyCode)for(let e=0;e<item.length;e++)item[e].querySelector(".link").matches(":focus-visible")?item[e].classList.add("hover"):item[e].classList.remove("hover")})),document.querySelector(".pinkwug .hidden").addEventListener("click",(function(e){e.target.matches("span")&&e.target.matches("p")&&e.target.matches("a")||window.open("https://pinkwug.live")}));