const overlay=document.querySelector(".columns .overlay"),img=overlay.querySelectorAll("img"),button=document.querySelectorAll(".overlay .arrow"),listItem=document.querySelectorAll(".cert ul li");function detectActive(){for(let t=0;t<img.length;t++)if(img[t].classList.contains("active")&&2==img[t].classList.length){var e=t;break}return e}function resetClasses(e){img[e-1]&&img[e-1].classList.remove("active","before"),img[e]&&(img[e].tabIndex=-1,img[e].classList.remove("active")),img[e+1]&&img[e+1].classList.remove("active","after")}function assignClasses(e){img[e].tabIndex=0,img[e].classList.add("active"),img[e-1]?img[e-1].classList.add("active","before"):(button[0].classList.add("disabled"),button[0].tabIndex=-1),img[e+1]?img[e+1].classList.add("active","after"):(button[1].classList.add("disabled"),button[1].tabIndex=-1)}function activateOverlay(e){overlay.classList.add("active"),overlay.querySelector(".wrapper").classList.add("active"),button[0].tabIndex=0,button[1].tabIndex=0;for(let e=0;e<listItem.length;e++)listItem[e].tabIndex=-1;for(let t=0;t<img.length;t++)img[t].classList[0]==e.target.classList[0]&&(assignClasses(t),img[t].addEventListener("click",(function(e){e.stopPropagation()})))}overlay.addEventListener("click",(function(){this.classList.remove("active"),overlay.querySelector(".wrapper").classList.remove("active");for(let e=0;e<img.length;e++)img[e].tabIndex=-1,img[e].classList.remove("active","before","after");button[0].classList.remove("disabled"),button[0].tabIndex=-1,button[1].classList.remove("disabled"),button[1].tabIndex=-1;for(let e=0;e<listItem.length;e++)listItem[e].tabIndex=0})),document.querySelector(".cert ul").addEventListener("click",(function(e){activateOverlay(e)})),document.querySelector(".cert ul").addEventListener("keyup",(function(e){"Enter"===e.code&&activateOverlay(e)})),button[0].addEventListener("click",(function(e){button[1].classList.remove("disabled"),e.stopPropagation();let t=detectActive();0!==t&&(button[1].tabIndex=0,resetClasses(t),assignClasses(t-1))})),button[1].addEventListener("click",(function(e){button[0].classList.remove("disabled"),e.stopPropagation();let t=detectActive();t!==img.length-1&&(button[0].tabIndex=0,resetClasses(t),assignClasses(t+1))}));const item=document.querySelectorAll(".flex_wrapper .item");document.addEventListener("mousemove",(function(){for(let e=0;e<item.length;e++)item[e].matches(":hover")?item[e].classList.add("hover"):item[e].classList.remove("hover")})),document.addEventListener("keydown",(function(e){if("Tab"===e.code)for(let e=0;e<item.length;e++)item[e].querySelector(".link").matches(":focus-visible")?item[e].classList.add("hover"):item[e].classList.remove("hover")})),document.querySelector(".pinkwug .hidden").addEventListener("click",(function(e){e.target.matches("span")&&e.target.matches("p")&&e.target.matches("a")||window.open("https://pinkwug.live")}));