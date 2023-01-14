import "./_header";
import "./_footerDropdown.js";

if (/^es\b/.test(navigator.language)){
  window.location.href = "https://es." + window.location.hostname;
}