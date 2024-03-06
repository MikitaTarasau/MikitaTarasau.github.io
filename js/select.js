

var formSelect;
var i, j, formSelectLength;
var selectsQuantity;
var selElmnt, b, c;
var subSelect;
formSelect = document.getElementsByClassName("form__select-wrap");
formSelectLength = formSelect.length;
for (i = 0; i < formSelectLength; i++) {
  selElmnt = formSelect[i].getElementsByTagName("select")[0];
  selectsQuantity = selElmnt.length;
  subSelect = document.createElement("div");
  subSelect.setAttribute("class", "select-selected");
  subSelect.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  formSelect[i].appendChild(subSelect);
  b = document.createElement("div");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selectsQuantity; j++) {
    c = document.createElement("div");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  formSelect[i].appendChild(b);
  subSelect.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var formSelect, y, i, xl, yl, arrNo = [];
  formSelect = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = formSelect.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      formSelect[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect); 