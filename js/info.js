window.onload = function () {
    initializeInfo()
    //window.setTimeout(initializeNav, 500);
};

function initializeInfo(){
    let screenshots = document.getElementsByClassName("screenshot");
    for(let screenshot of screenshots){
        console.log(screenshot);
        screenshot.addEventListener("click", modalOpen);
    }
}
function modalOpen(){
    console.log("Image clicked");
}