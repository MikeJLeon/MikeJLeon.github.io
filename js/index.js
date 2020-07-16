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
    if(revealertop - 100 <= windowHeight){
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
  let intro = document.getElementsByClassName("hiddenIntro");
  let introElements = [...intro];
  current = 1000;
  for(let element of introElements){
    window.setTimeout(showintro.bind(element), current);
  }
  current = 0;
  initializeNav();
}
function showintro(){
  this.classList.remove("hiddenIntro");
}

function typeLetters(){
  let nameDiv = document.getElementsByClassName("name")[0];
  nameDiv.innerHTML += this
}
window.onload = function () {
  window.setTimeout(initialize, 500);
  window.addEventListener('scroll', show);
};
