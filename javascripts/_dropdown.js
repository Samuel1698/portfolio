var wrapper, i, j, label_id, realSelect, button, content, option, span, svg, path1, path2;
// Look for any elements with the class "custom-select":
// These elements will be used as containers for the custom dropdown menu.
wrapper = document.getElementsByClassName("inline");

for (i = 0; i < wrapper.length; i++) {
  realSelect = wrapper[i].getElementsByTagName("select")[0];
  // For each element, create a new button that will act as the selected item:
  button = document.createElement("button");
  button.setAttribute("class", "select-button");
  button.tabIndex = 0;
  button.setAttribute("type", "button");
  // Find aria label
  label_id = wrapper[i].querySelector("label").id
  button.setAttribute("aria-labelledby", label_id);
  button.setAttribute("aria-expanded", "false");
  // Create empty span container and populate it with the selectedItem's content
  span = document.createElement("span");
  span.innerHTML = realSelect.options[realSelect.selectedIndex].innerHTML;
  // Create svg of caret down
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  // svg attributes
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewbox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#23434F");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  // Path attributes
  path1.setAttribute("stroke", "none");
  path1.setAttribute("d", "M0 0h24v24H0z");
  path1.setAttribute("fill", "none");
  // Path attributes
  path2.setAttribute("d", "M18 15l-6 -6l-6 6h12");
  path2.setAttribute("transform", "rotate(180 12 12)");
  // add paths to svg
  svg.appendChild(path1);
  svg.appendChild(path2);

  wrapper[i].appendChild(button);
  button.appendChild(span);
  button.appendChild(svg);
  // For each element, create a new UL that will contain the option list:
  content = document.createElement("ul");
  content.setAttribute("class", "select-items select-hide");
  for (j = 0; j < realSelect.length; j++) {
    // For each option in the original select element, create a new LI that will act as an option item:
    option = document.createElement("li");
    option.innerHTML = realSelect.options[j].innerHTML;
    option.setAttribute("class", "select-item");
    option.addEventListener("click", function () {
      updateOriginal(this);
    });
    content.appendChild(option);
  }
  wrapper[i].appendChild(content);
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSelectBox(this);
  });
  // Add event listener to up down key to the div
  button.addEventListener("keydown", function (event) {
    if (event.key == "ArrowUp" || event.key == "ArrowDown") {
      event.preventDefault();
      // Move selection up and down with corresponding arrow key
      var i, k, selected, realSelect, child;
      realSelect = this.parentNode.getElementsByTagName("select")[0];
      child = this.nextElementSibling.querySelectorAll("li");
      for (i = 0; i < realSelect.length; i++) {
        // Check the current button content
        if (realSelect.options[i].innerHTML == this.innerText) {
          // Figure out it's index in the select node
          realSelect.selectedIndex = i;
          if (event.key == "ArrowUp" && realSelect.options[i - 1]) {
            this.querySelector("span").innerHTML =
              realSelect.options[i - 1].innerHTML;
          }
          if (event.key == "ArrowDown" && realSelect.options[i + 1]) {
            this.querySelector("span").innerHTML =
              realSelect.options[i + 1].innerHTML;
          }
          selected =
            this.nextSibling.getElementsByClassName("same-as-selected");
          for (k = 0; k < selected.length; k++) {
            // Reset the 'same as selected' class
            selected[k].classList.remove("same-as-selected");
          }
          for (i = 0; i < child.length; i++) {
            // Assign 'same as selected' class to the child of fake select if it matches the selected text
            if (this.querySelector("span").innerHTML == child[i].innerHTML) {
              child[i].classList.add("same-as-selected");
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
    if (event.key == "Enter") {
      event.preventDefault();
    }
  });
}
function toggleSelectBox(that) {
  // When the select box is clicked, close any other select boxes, toggle the current select box and set the aria labels
  closeAllSelect(that);
  toggleAriaExpanded(that);
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
        selected[k].classList.remove("same-as-selected");
      }
      that.classList.add("same-as-selected");
      break;
    }
  }
  button.click();
}
function toggleAriaExpanded(element) {
  let attr = element.getAttribute("aria-expanded");
  if (attr == "true")
    attr = "false"
  else
    attr = "true"
  element.setAttribute("aria-expanded", attr);
}
function closeAllSelect(element) {
  // A function that will close all select boxes in the document, except the current select box:
  /* prettier-ignore */
  var ul, i, arrNo = [];
  ul = document.getElementsByClassName("select-items");
  button = document.getElementsByClassName("select-button");
  for (i = 0; i < button.length; i++) {
    if (element == button[i]) {
      arrNo.push(i);
    } else {
      button[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < ul.length; i++) {
    if (arrNo.indexOf(i)) {
      ul[i].classList.add("select-hide");
      button[i].setAttribute("aria-expanded", "false");
    }
  }
}
// If the user clicks anywhere outside the select box, then close all select boxes:
document.addEventListener("click", closeAllSelect);
