!function(){var t=document.querySelector("section.contact"),n=document.querySelectorAll(".split section.side > .right"),i=document.querySelector("section.contact");function e(){let t=-i.offsetHeight/2+"px";i.style.marginBottom=t}function o(){for(let t=0;t<n.length;t++)n[t].classList.contains("visible")||s(n[t],25)&&n[t].classList.add("visible")}function c(){t.classList.contains("animation")||s(t,0)&&t.classList.add("animation")}function s(t,n){var i=t.getBoundingClientRect(),e=i.width*i.height;return(Math.min(i.right,window.innerWidth)-Math.max(i.left,0))*(Math.min(i.bottom,window.innerHeight)-Math.max(i.top,0))/e*100>=n}window.addEventListener("resize",(()=>{e()})),window.onload=function(){e(),o(),c()},window.addEventListener("scroll",function(t,n){let i;return function(){const e=this,o=arguments,c=function(){i=null,t.apply(e,o)};clearTimeout(i),i=setTimeout(c,n)}}((function(){o(),c()}),100))}();