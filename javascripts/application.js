import "./_header";
import "./_footerDropdown.js";

var host = window.location.host
var subdomain = host.split('.')[0]
if (/^es\b/.test(navigator.language) && subdomain != "en"){
  window.location.href = "https://es.samuelgmunoz.com";
}