!function(){var e=[,function(){const e=document.querySelectorAll("header .menu-toggle"),t=document.querySelector("header .menu"),n=document.querySelector("header .overlay"),r=document.querySelectorAll("button.category"),s=document.querySelector("body");function o(e,n){"before"==n?i+=e.offsetHeight:"after"==n&&(i-=e.offsetHeight),t.style.setProperty("--collapsedHeight",i+"px")}function l(){t.classList.toggle("visible"),n.classList.toggle("visible"),e[0].classList.toggle("visible"),e[1].classList.toggle("visible"),s.classList.toggle("no-scroll")}e[0].addEventListener("click",l),e[1].addEventListener("click",l),n.addEventListener("click",l);let i=0;for(let e=0;e<r.length;e++)r[e].addEventListener("click",(function(){let t=r[e].nextElementSibling;o(t,"before"),r[e].querySelector("img").classList.toggle("closed"),t.classList.toggle("closed"),o(t,"after")}))},function(){var e=document.querySelector("footer button.applyChanges"),t=document.querySelector("footer button.select-button"),n=document.querySelector("footer ul.select-items"),r=n.querySelectorAll("li.select-item");t.addEventListener("click",(function(e){e.stopPropagation(),n.classList.toggle("select-hide"),t.classList.toggle("select-arrow-active"),t.setAttribute("aria-expanded","true")})),document.addEventListener("click",(function(){n.classList.add("select-hide"),t.classList.remove("select-arrow-active"),t.setAttribute("aria-expanded","false")})),t.addEventListener("keydown",(function(o){if("ArrowUp"==o.key||"ArrowDown"==o.key){o.preventDefault();for(let t=0;t<r.length;t++){for("ArrowUp"==o.key&&r[t-1]&&(this.querySelector("span").innerHTML=r[t-1].innerHTML,s(r[t-1])),"ArrowDown"==o.key&&r[t+1]&&(this.querySelector("span").innerHTML=r[t+1].innerHTML,s(r[t+1])),this.parentElement.querySelector(".same-as-selected").classList.remove("same-as-selected"),k=0;k<r.length;k++)this.querySelector("span").innerHTML==r[k].innerHTML&&r[k].classList.add("same-as-selected");e.removeAttribute("style")}}"Enter"!=o.key&&"Tab"!=o.key||(o.stopPropagation(),n.classList.add("select-hide"),t.classList.remove("select-arrow-active"),t.setAttribute("aria-expanded","false")),"Enter"==o.key&&o.preventDefault()}));for(let n=0;n<r.length;n++)r[n].addEventListener("click",(function(n){n.stopPropagation(),t.querySelector("span").innerHTML=this.innerHTML;let r=this.parentElement.getElementsByClassName("same-as-selected");for(k=0;k<r.length;k++)r[k].classList.remove("same-as-selected");this.classList.add("same-as-selected"),this.parentElement.classList.toggle("select-hide"),t.classList.remove("select-arrow-active"),t.setAttribute("aria-expanded","false"),e.removeAttribute("style"),s(this)}));function s(t){"ES"==t.querySelector("span").innerText?e.querySelector("span.text").innerText="Aplicar Cambio":"EN"==t.querySelector("span").innerText&&(e.querySelector("span.text").innerText="Save Change")}e.addEventListener("click",(function(){var e="https://www.samuelgmunoz.com",n=window.location.pathname;"ES"==t.querySelector("span span").innerText?e="https://es.samuelgmunoz.com":"EN"==t.querySelector("span span").innerText&&(e="https://en.samuelgmunoz.com");var r=e+n;window.location.href=r}))}],t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){"use strict";n.r(r);n(1),n(2)}()}();