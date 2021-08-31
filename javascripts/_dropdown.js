var wrapper, i, j, realSelect, button, content, option, span;
// Look for any elements with the class "custom-select":
wrapper = document.getElementsByClassName("inline");

for (i = 0; i < wrapper.length; i++) {
  realSelect = wrapper[i].getElementsByTagName("select")[0];
  // For each element, create a new DIV that will act as the selected item:
  button = document.createElement("div");
  button.setAttribute("class", "select-selected");
  button.tabIndex = 0;
  span = document.createElement("SPAN");
  span.innerHTML = realSelect.options[realSelect.selectedIndex].innerHTML;
  wrapper[i].appendChild(button);
  button.appendChild(span);
  // For each element, create a new DIV that will contain the option list:
  content = document.createElement("DIV");
  content.setAttribute("class", "select-items select-hide");
  for (j = 0; j < realSelect.length; j++) {
    // For each option in the original select element, create a new DIV that will act as an option item:
    option = document.createElement("DIV");
    option.innerHTML = realSelect.options[j].innerHTML;
    option.setAttribute("class", "select-item");
    option.addEventListener("click", function (e) {
      updateOriginal(this);
    });
    content.appendChild(option);
  }
  wrapper[i].appendChild(content);
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSelectBox(this);
  });
  // Add event listener to up down key to the div
  button.addEventListener("keydown", function (event) {
    if (event.key == "ArrowUp" || event.key == "ArrowDown") {
      event.preventDefault();
      // Move selection up and down with corresponding arrow key
      var i, k, selected, realSelect, child;
      realSelect = this.parentNode.getElementsByTagName("select")[0];
      child = this.nextElementSibling.querySelectorAll("div");
      for (i = 0; i < realSelect.length; i++) {
        // Check the current button content
        if (realSelect.options[i].innerHTML == this.innerText) {
          // Figure out it's index in the select node
          realSelect.selectedIndex = i;
          if (event.key == "ArrowUp" && realSelect.options[i - 1]) {
            this.querySelector("span").innerHTML = realSelect.options[i - 1].innerHTML;
          }
          if (event.key == "ArrowDown" && realSelect.options[i + 1]) {
            this.querySelector("span").innerHTML = realSelect.options[i + 1].innerHTML;
          }
          selected = this.nextSibling.getElementsByClassName("same-as-selected");
          for (k = 0; k < selected.length; k++) {
            // Reset the 'same as selected' class
            selected[k].removeAttribute("class");
          }
          for (i = 0; i < child.length; i++) {
            // Assign 'same as selected' class to the child of fake select if it matches the selected text
            if (this.querySelector("span").innerHTML == child[i].innerHTML) {
              child[i].setAttribute("class", "same-as-selected");
              break;
            }
          }
          break;
        }
      }
    }
    if (event.key == "Enter" || event.key == "Tab") {
      event.stopPropagation();
      closeAllSelect();
    }
  });
}
function toggleSelectBox(that) {
  // When the select box is clicked, close any other select boxes, and open / close the current select box:
  closeAllSelect(that);
  that.nextSibling.classList.toggle("select-hide");
  that.classList.toggle("select-arrow-active");
}
function updateOriginal(that) {
  // When an item is clicked, update the original select box, and the selected item:
  var selected, i, k, select, button;
  select = that.parentNode.parentNode.getElementsByTagName("select")[0];
  button = that.parentNode.previousSibling;
  for (i = 0; i < select.length; i++) {
    if (select.options[i].innerHTML == that.innerHTML) {
      select.selectedIndex = i;
      button.querySelector("span").innerHTML = that.innerHTML;
      selected = that.parentNode.getElementsByClassName("same-as-selected");
      for (k = 0; k < selected.length; k++) {
        selected[k].removeAttribute("class");
      }
      that.setAttribute("class", "same-as-selected");
      break;
    }
  }
  button.click();
}
function closeAllSelect(element) {
  // A function that will close all select boxes in the document, except the current select box:
  var wrapper, div, i, arrNo = [];
  wrapper = document.getElementsByClassName("select-items");
  button = document.getElementsByClassName("select-selected");
  for (i = 0; i < button.length; i++) {
    if (element == button[i]) {
      arrNo.push(i);
    } else {
      button[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < wrapper.length; i++) {
    if (arrNo.indexOf(i)) {
      wrapper[i].classList.add("select-hide");
    }
  }
}
// If the user clicks anywhere outside the select box, then close all select boxes:
document.addEventListener("click", closeAllSelect);
