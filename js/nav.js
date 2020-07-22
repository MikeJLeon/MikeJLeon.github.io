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
  let ham = document.getElementById("rightNav");
  ham.addEventListener("click", openNav.bind("burger"));
  //document.getElementById("content").addEventListener("click", openNav.bind("body"));
  window.setInterval(shaky, 2000);
}
function openNav(event) {
  console.log(this);
  let hamNav = document.getElementsByClassName("hamNav")[0];
  if (
    hamNav.classList.contains("activeHam") &&
    (this == "burger" || this == "body")
  ) {
    //document.getElementById("content").removeEventListener("click", openNav.bind("body"));
    hamNav.classList.remove("activeHam");
  } else {
    hamNav.classList.add("activeHam");
  }
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
