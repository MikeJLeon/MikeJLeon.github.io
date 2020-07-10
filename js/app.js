function scrollArrowBig() {
  let arrow = document.getElementsByClassName("scrollArrow")[0];
  arrow.classList.add("scrollArrowAnimation");
  window.setTimeout(function(){
    arrow.classList.remove("scrollArrowAnimation");
  }, 500);
  return;
}
window.onload = function(){
  window.setInterval(scrollArrowBig, 1000)
};
