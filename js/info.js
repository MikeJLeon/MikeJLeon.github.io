window.onload = function () {
  initializeInfo();
  window.setTimeout(initializeNav, 500);
};

function initializeInfo() {
  let screenshots = document.getElementsByClassName("screenshot");
  let infoImgs = document.getElementsByClassName("infoImgs")[0];
  let carousal = document.getElementsByClassName("imgCarousal")[0];
  let position = 0;
  let firstScreenshot = carousal.firstElementChild.cloneNode(true);
  let lastScreenshot = carousal.lastElementChild.cloneNode(true);
  carousal.style.transform = `translateX(-100%)`;
  carousal.appendChild(firstScreenshot);
  carousal.prepend(lastScreenshot);
  for (let screenshot of screenshots) {
    screenshot.addEventListener("click", modalOpen.bind(null, screenshot));
    position += 100;
  }
  let leftCarousalArrow = document.getElementsByClassName(
    "leftCarousalArrow"
  )[0];
  let rightCarousalArrow = document.getElementsByClassName(
    "rightCarousalArrow"
  )[0];
  // leftCarousalArrow.addEventListener("click", shiftCarousal.bind(null, "left"));
  // rightCarousalArrow.addEventListener(
  //   "click",
  //   shiftCarousal.bind(null, "right")
  // );
  let index = 1;
  let stopListening = true;
  leftCarousalArrow.addEventListener("click", function () {
    if (stopListening) {
      if (index === 1) {
        index = screenshots.length - 2;
        carousal.style.transition = "all 0.5s";
        carousal.style.transform = `translateX(0)`;
        stopListening = false;
        setTimeout(function () {
          carousal.style.transition = "none";
          carousal.style.transform = `translateX(${-index * 100}%)`;
          stopListening = true;
        }, 500);
      } else {
        index--;
        carousal.style.transition = "all 0.5s";
        carousal.style.transform = `translateX(${-index * 100}%)`;
        stopListening = false;
        setTimeout(function () {
          stopListening = true;
        }, 500);
      }
    }
  });
  rightCarousalArrow.addEventListener("click", function () {
    if (stopListening) {
      console.log(index, screenshots.length - 2, screenshots.length - 1);
        if (index === screenshots.length - 2) {
        index = 1
        carousal.style.transition = "all 500ms";
        carousal.style.transform = `translateX(-${(screenshots.length - 1) * 100}%)`;
        stopListening = false;
        setTimeout(function () {
          carousal.style.transition = "none";
          carousal.style.transform = `translateX(${-100}%)`;
          stopListening = true;
        }, 500);
      } else {
        index++;
        carousal.style.transition = "all 500ms";
        carousal.style.transform = `translateX(${-index * 100}%)`;
        stopListening = false;
        setTimeout(function () {
          carousal.style.transition = "none";
          stopListening = true;
        }, 500);
      }
    }
  });
}

function modalOpen(screenshot) {
  let modalImg = document.getElementsByClassName("modalImg")[0];
  let modal = document.getElementsByClassName("infoModal")[0];
  let modalExit = document.getElementsByClassName("exitModal")[0];
  let modalTrigger = document.getElementsByClassName("modalTrigger")[0];
  modalExit.addEventListener(
    "click",
    modalClose.bind(null, modal, modalExit, modalTrigger)
  );
  modalTrigger.addEventListener(
    "click",
    modalClose.bind(null, modal, modalExit, modalTrigger)
  );
  modalImg.src = screenshot.src;
  modal.setAttribute("style", "display:flex");
}
function modalClose(modal, modalExit, modalTrigger) {
  modal.setAttribute("style", "display:none");
  modalExit.removeEventListener("click", modalClose);
  modalTrigger.removeEventListener("click", modalClose);
}
