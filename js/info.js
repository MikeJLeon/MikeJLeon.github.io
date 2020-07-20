window.onload = function () {
    initializeInfo()
    //window.setTimeout(initializeNav, 500);
};

function initializeInfo(){
    let screenshots = document.getElementsByClassName("screenshot");
    for(let screenshot of screenshots){
        console.log(screenshot);
        screenshot.addEventListener("click", modalOpen.bind(null, screenshot));
    }
}
function modalOpen(screenshot){
    let modalImg = document.getElementsByClassName("modalImg")[0];
    let modal = document.getElementsByClassName("infoModal")[0];
    let modalExit = document.getElementsByClassName("exitModal")[0];
    modalExit.addEventListener("click", modalClose.bind(null, modal, modalExit));
    modalImg.src = screenshot.src;
    console.log(screenshot.src);
    modal.setAttribute("style", "display:flex");
}
function modalClose(modal, modalExit){
    modal.setAttribute("style", "display:none");
    modalExit.removeEventListener("click", modalClose);
}