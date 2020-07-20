window.onload = function () {
  initializeInfo();
  window.setTimeout(initializeNav, 500);
};

function initializeInfo() {
  let screenshots = document.getElementsByClassName("screenshot");
  for (let screenshot of screenshots) {
    screenshot.addEventListener("click", modalOpen.bind(null, screenshot));
  }
  screenshots = carousal(screenshots);
  let leftCarousalArrow = document.getElementsByClassName(
    "leftCarousalArrow"
  )[0];
  let rightCarousalArrow = document.getElementsByClassName(
    "rightCarousalArrow"
  )[0];
  leftCarousalArrow.addEventListener("click", shiftCarousal.bind(null, "left"));
  rightCarousalArrow.addEventListener(
    "click",
    shiftCarousal.bind(null, "right")
  );
}
function modalOpen(screenshot) {
  let modalImg = document.getElementsByClassName("modalImg")[0];
  let modal = document.getElementsByClassName("infoModal")[0];
  let modalExit = document.getElementsByClassName("exitModal")[0];
  let modalTrigger = document.getElementsByClassName("modalTrigger")[0];
  modalExit.addEventListener("click", modalClose.bind(null, modal, modalExit, modalTrigger));
  modalTrigger.addEventListener("click", modalClose.bind(null, modal, modalExit, modalTrigger));
  modalImg.src = screenshot.src;
  modal.setAttribute("style", "display:flex");
}
function modalClose(modal, modalExit, modalTrigger) {
  modal.setAttribute("style", "display:none");
  modalExit.removeEventListener("click", modalClose);
  modalTrigger.removeEventListener("click", modalClose);
}
function carousal(screenshots) {
  let previousImg = screenshots[screenshots.length - 1].cloneNode(true);
  let container = document.getElementsByClassName("imgCarousal")[0];
  screenshots = document.getElementsByClassName("screenshot");
  container.prepend(previousImg);
  return screenshots;
}
function shiftCarousal(direction) {
  let screenshots = document.getElementsByClassName("screenshot");
  let newArray = [];
  if (direction === "left") {
    for (let i = 0; i <= screenshots.length - 1; i++) {
      if (i == 0) {
        newArray[i] = screenshots[screenshots.length - 2].src;
      } else {
        newArray[i] = screenshots[i - 1].src;
      }
    }
  } else {
    for (let i = 0; i <= screenshots.length - 1; i++) {
      if (i == screenshots.length - 1) {
        newArray[i] = screenshots[1].src;
      } else {
        newArray[i] = screenshots[i + 1].src;
      }
    }
  }
  for (let i = 0; i <= screenshots.length - 1; i++) {
    screenshots[i].src = newArray[i];
  }
}
