!function(){var e=[,function(){const e=document.querySelector(".columns .overlay"),t=e.querySelectorAll("img"),n=e.querySelector(".wrapper"),o=document.querySelectorAll(".overlay .arrow"),i=document.querySelectorAll(".cert ul li"),s=n.querySelector(".close"),c=document.querySelector("body");function r(e){o[1].classList.remove("disabled"),e.stopPropagation();let t=l();0!==t&&(s.classList.toggle("hide"),o[0].classList.add("pressed"),setTimeout((function(){o[0].classList.remove("pressed")}),500),setTimeout((function(){s.classList.toggle("hide")}),1e3),o[1].tabIndex=0,d(t),u(t-1))}function a(e){o[0].classList.remove("disabled"),e.stopPropagation();let n=l();n!==t.length-1&&(s.classList.toggle("hide"),o[1].classList.add("pressed"),setTimeout((function(){o[1].classList.remove("pressed")}),500),setTimeout((function(){s.classList.toggle("hide")}),1e3),o[0].tabIndex=0,d(n),u(n+1))}function l(){for(let n=0;n<t.length;n++)if(t[n].classList.contains("active")&&2==t[n].classList.length){var e=n;break}return e}function d(e){t[e-1]&&t[e-1].classList.remove("active","before"),t[e]&&(t[e].tabIndex=-1,t[e].classList.remove("active")),t[e+1]&&t[e+1].classList.remove("active","after")}function u(e){t[e].tabIndex=0,t[e].classList.add("active"),t[e-1]?t[e-1].classList.add("active","before"):(o[0].classList.add("disabled"),o[0].tabIndex=-1),t[e+1]?t[e+1].classList.add("active","after"):(o[1].classList.add("disabled"),o[1].tabIndex=-1)}function f(s){c.classList.add("no-scroll"),e.classList.add("active"),n.classList.add("active"),o[0].tabIndex=0,o[1].tabIndex=0;for(let e=0;e<i.length;e++)i[e].tabIndex=-1;for(let e=0;e<t.length;e++)t[e].addEventListener("click",(function(e){e.stopPropagation()})),t[e].classList[0]==s.target.classList[0]&&u(e);document.querySelector(".img-border").addEventListener("click",(function(e){e.stopPropagation()}))}e.addEventListener("click",(function(){c.classList.remove("no-scroll"),this.classList.remove("active"),n.classList.remove("active");for(let e=0;e<t.length;e++)t[e].tabIndex=-1,t[e].classList.remove("active","before","after");o[0].classList.remove("disabled"),o[0].tabIndex=-1,o[1].classList.remove("disabled"),o[1].tabIndex=-1;for(let e=0;e<i.length;e++)i[e].tabIndex=0})),document.querySelector(".cert ul").addEventListener("click",(function(e){f(e)})),document.querySelector(".cert ul").addEventListener("keyup",(function(e){"Enter"===e.code&&f(e)})),o[0].addEventListener("click",(e=>{r(e)})),document.addEventListener("keydown",(e=>{"ArrowLeft"===e.key&&r(e)})),o[1].addEventListener("click",(function(e){a(e)})),document.addEventListener("keydown",(e=>{"ArrowRight"===e.key&&a(e)}))},function(){var e=document.querySelectorAll(".flex_wrapper .item .link");document.addEventListener("mousemove",(function(){for(let t=0;t<e.length;t++)e[t].matches(":hover")||e[t].nextElementSibling.matches(":hover")?e[t].parentNode.classList.add("hover"):e[t].parentNode.classList.remove("hover")})),document.addEventListener("keyup",(function(t){if("Tab"===t.code)for(let t=0;t<e.length;t++)e[t].matches(":focus-visible")?e[t].parentNode.classList.add("focus"):e[t].parentNode.classList.remove("focus")}));var t=document.querySelectorAll(".bar .expand");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.parentNode.parentNode.classList.toggle("toggle"),this.classList.toggle("on")}));document.querySelector(".pinkwug .hidden").addEventListener("click",(function(e){window.location="/pinkwug.html"})),document.querySelector(".portfolio .hidden").addEventListener("click",(function(e){window.location="/portfolio.html"}))},function(){function e(){var e=document.querySelectorAll("main section.column ul");for(let t=0;t<e.length;t++)e[t].classList.contains("animation")||o(e[t])&&e[t].classList.add("animation")}function t(){var e,t,n=document.querySelectorAll(".work .item");for(let i=0;i<n.length;i++)n[i].classList.contains("animation")||o(n[i])&&n[i].classList.add("animation"),n[i].classList.contains("v")||(e=n[i],t=void 0,(t=e.getBoundingClientRect()).top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth&&(n[i].classList.add("v"),setTimeout((()=>{n[i].classList.add("toggle"),n[i].querySelector(".expand").classList.add("on"),setTimeout((()=>{n[i].classList.remove("toggle"),n[i].querySelector(".expand").classList.remove("on")}),4500)}),2e3)))}function n(){var e=document.querySelector("section.contact");e.classList.contains("animation")||o(e)&&e.classList.add("animation")}function o(e){var t=e.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-n>=0)}window.onload=function(){e(),t(),n()},window.onscroll=function(e,t){let n;return function(){const o=this,i=arguments,s=function(){n=null,e.apply(o,i)};clearTimeout(n),n=setTimeout(s,t)}}((function(){e(),t(),n()}),100)},function(){function e(){let e=document.querySelector("section.contact"),t=-e.offsetHeight/2+"px";e.style.marginBottom=t}function t(){let e=document.querySelectorAll("section.work .item"),t=e[0].querySelector(".bar"),n=e[0].querySelector(".link"),o=t.offsetHeight+9*n.offsetWidth/16+"px";for(let t=0;t<e.length;t++)e[t].style.minHeight=o}window.addEventListener("load",(()=>{e(),t()})),window.addEventListener("resize",(()=>{e(),t()}))}],t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o);n(1),n(2),n(3),n(4)}()}();