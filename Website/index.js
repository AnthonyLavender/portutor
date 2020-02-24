'use strict';

function sentButtonClick(){
    let  popup = document.getElementById("sendPopUp");
    popup.style.visibility = "visible";
}



window.onload = function () {
    document.getElementById("sendPopUp").addEventListener("click", sentButtonClick)
    
}
