//https://colorhunt.co/palette/180289
function scrollArrowBig() {
  let arrow = document.getElementsByClassName("scrollArrow")[0];
  arrow.classList.add("scrollArrowAnimation");
  window.setTimeout(function () {
    arrow.classList.remove("scrollArrowAnimation");
  }, 500);
  return;
}
function show(){
  let elements = document.getElementsByClassName("hidden");
  if(elements.length === 0){
    window.removeEventListener('scroll', show);
  }
  let old = [...elements];
  for(let element in old){
    let windowHeight = window.innerHeight;
    let revealertop = old[element].getBoundingClientRect().top;
    if(revealertop <= windowHeight){
      old[element].classList.remove("hidden");
    }
  }
}
function initialize(){
  let name = "Michael Leon";
  let current = 100;
  for(let chara of name){
    window.setTimeout(typeLetters.bind(chara), current);
    current += 100;
  }
  let about = document.getElementsByClassName("hiddenAbout");
  let aboutElements = [...about];
  current = 1000;
  for(let element of aboutElements){
    console.log(aboutElements);
    window.setTimeout(showAbout.bind(element), current);
  }
  current = 0;
  document.getElementsByClassName("initializeNav")[0].classList.remove('initializeNav');
  let buttons = document.getElementsByClassName("initializeButtons");
  let elements = [...buttons]
  current = 1000;
  for(let element of elements){
    window.setTimeout(showNavButtons.bind(element), current);
    current += 200;
  }
}
function showAbout(){
  this.classList.remove("hiddenAbout");
}
function showNavButtons(){
  this.classList.remove("initializeButtons");
}
function typeLetters(){
  let nameDiv = document.getElementsByClassName("name")[0];
  nameDiv.innerHTML += this
}
function shaky(){
  let buttons = document.getElementsByClassName("shaky");
  let elements = [...buttons];
  let random = Math.floor(Math.random() * elements.length);
  window.setTimeout(function(){
    elements[random].classList.add("nowShaky");
    window.setTimeout(function(){
      elements[random].classList.remove("nowShaky")
    }, 2000);
  }, 2000)
}
window.onload = function () {
  window.setTimeout(initialize, 500);
  window.setInterval(shaky, 2000);
  window.addEventListener('scroll', show);
};
