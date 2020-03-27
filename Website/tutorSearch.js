getData();

async function getData(){
    console.log("test");
    const response = await fetch('/getProfileData');
    const data = await response.json();
    tutorSeperator(data);
    
}


function tutorSeperator(data){
    console.log(data[0]);
    // const data=tutorSeperator(data);
    console.log("------------------------------------------")
    // console.log(tutorData);
    // for (let i = 0; i<data.length-1;i++ ){
    //     if (data[i].profile_Tutor==="False"){data.splice(i,1)};
    // };  
    console.log(data);
    var btn = document.getElementsByClassName('btn');
    let elementList = document.getElementsByClassName("form-input");
    console.log("Hi");
    let subjectValue = elementList[0].value;
    // let degreeValue = elementList[1].value;
    let LocationValue = elementList[2].value;
    let RatingValue = elementList[3].value;
    let PriceValue = elementList[4].value;

    for (let i = 0; i<data.length-1;i++ ){
        if (data[i].profile_Tutor==="False" || 
        data[i].profile_Subject!=subjectValue ||
        data[i].profile_Tutor_Location!=LocationValue 
        
        // data[i].profile_Stars!=RatingValue ||
        // data[i].profile_profile_Tutor_Price!=PriceValue 
        ){data.splice(i,1)};
    };  
    console.log(data);
    
}