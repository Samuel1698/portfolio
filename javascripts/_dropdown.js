var x, i, j, l, ll, selElmnt, a, b, c, span;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("inline");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  // a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  a.tabIndex = 0;
  span = document.createElement("SPAN");
  span.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  a.appendChild(span);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.tabIndex = 0;
    c.addEventListener("click", function(e){
      updateOriginal(this);
    });
    c.addEventListener("keyup", function(e){
      if (e.code == 'Enter') {
        e.preventDefault();
        updateOriginal(this);
      }
    })
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSelextBox(this);
  });
  a.addEventListener("keyup", function(e){
    e.stopPropagation();
    if (e.code == 'Enter'){
      toggleSelextBox(this);
    }
  })
}
function toggleSelextBox(that){
  /* When the select box is clicked, close any other select boxes,
  and open/close the current select box: */
  closeAllSelect(that);
  that.nextSibling.classList.toggle("select-hide");
  that.classList.toggle("select-arrow-active");
}
function updateOriginal(that) {
  /* When an item is clicked, update the original select box, and the selected item: */
  var y, i, k, s, h, sl, yl;
  s = that.parentNode.parentNode.getElementsByTagName("select")[0];
  sl = s.length;
  h = that.parentNode.previousSibling;
  for (i = 0; i < sl; i++) {
    if (s.options[i].innerHTML == that.innerHTML) {
      s.selectedIndex = i;
      // h.innerHTML = that.innerHTML;
      h.querySelector("span").innerHTML = that.innerHTML;
      y = that.parentNode.getElementsByClassName("same-as-selected");
      yl = y.length;
      for (k = 0; k < yl; k++) {
        y[k].removeAttribute("class");
      }
      that.setAttribute("class", "same-as-selected");
      break;
    }
  }
  h.click();
}
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
