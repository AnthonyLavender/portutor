'use strict';

window.onbeforeunload = function (){
        let elementList = document.getElementsByClassName("form-input");
        console.log("Hi");
        let subjectValue = elementList[0].value;
        let degreeValue = elementList[1].value;
        let LocationValue = elementList[2].value;
        let RatingValue = elementList[3].value;
        let PriceValue = elementList[4].value;
        console.log("There");

        let data = { 
            "Subject" : subjectValue,
            "Degree" : degreeValue,
            "Location" : LocationValue,
            "RatingValue" : RatingValue,
            "PriceValue" : PriceValue
        };
        console.log("How");
        console.log(data);
        let json = JSON.stringify(data);
        console.log(json);
        console.log("are");
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        };
        console.log("you");
        fetch('/SearchForTutor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        console.log("bossman");
}

// function f1() {
//     alert("f1 called");
//     //form validation that recalls the page showing with supplied inputs.    
// }
// window.onload = function() {
//     document.getElementById("Save").onclick = function fun() {
//         alert("hello");
//         f1();
//         //validation code to see State field is mandatory.  
//     }
// }