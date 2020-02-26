'use strict';

function sentButtonClick(){
    let nameInputEle = document.getElementById("nameInput");
    let emailInputEle = document.getElementById("emailInput");
    let messageInputEle = document.getElementById("subjectInput");

    let nameText = nameInputEle.value;
    let emailText = emailInputEle.value;
    let messageInput = messageInputEle.value;
    
//    nameInputEle.value = "";
//    emailInputEle.value = "";
//    messageInputEle.value = "";
    
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    let sel = document.getSelection();
    sel.removeAllRanges();
}

function resetButtonClick(){
    let nameInputEle = document.getElementById("nameInput");
    let emailInputEle = document.getElementById("emailInput");
    let messageInputEle = document.getElementById("subjectInput");
    
    nameInputEle.value = "";
    emailInputEle.value = "";
    messageInputEle.value = "";
}

window.onload = function () {
    document.getElementById("send_button").addEventListener("click", sentButtonClick);
    document.getElementById("reset_button").addEventListener("click", resetButtonClick);
    
}
