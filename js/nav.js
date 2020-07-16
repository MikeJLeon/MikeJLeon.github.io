function initializeNav() {
  document
    .getElementsByClassName("initializeNav")[0]
    .classList.remove("initializeNav");
  let buttons = document.getElementsByClassName("initializeButtons");
  let elements = [...buttons];
  let current = 1000;
  for (let element of elements) {
    window.setTimeout(showNavButtons.bind(element), current);
    current += 200;
  }
  window.setInterval(shaky, 2000);
}
function shaky() {
  let buttons = document.getElementsByClassName("shaky");
  let elements = [...buttons];
  let random = Math.floor(Math.random() * elements.length);
  window.setTimeout(function () {
    elements[random].classList.add("nowShaky");
    window.setTimeout(function () {
      elements[random].classList.remove("nowShaky");
    }, 2000);
  }, 2000);
}
function showNavButtons() {
  this.classList.remove("initializeButtons");
}
