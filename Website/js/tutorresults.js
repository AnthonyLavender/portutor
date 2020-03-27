window.onload = ()=>{

    function ParseURLParameter(Parameter){
        // var PageName=ParseURLParameter('subject);

        
        var FullUrl = window.location.search.substr(1);
        var ParametersArray = FullUrl.split('&');
        for(var i = 0; i<ParametersArray.length;i++){
            var CurrentParameter = ParametersArray[i].split('=');
            if (CurrentParameter[0]==Parameter){
                return CurrentParameter[1];
            }
        }

    }
    
    async function getData(){
        const response = await fetch('/getProfileData');
        const data = await response.json();   
        console.log(data[1]);
        var parameters= ['subject','location','rating','price']
        var PageName = [];
        for (index = 0; index < parameters.length;index++){
            var parameter2=ParseURLParameter(parameters[index]);
            PageName.push(parameter2);
        }
        
        for (let i = 0; i<data.length-1;i++ ){
            if (data[i].profile_Tutor==="false" || 
            data[i].profile_Subject==PageName[0] || 
            data[i].profile_Tutor_Location==PageName[1]  || 
            data[i].profile_Stars>=PageName[2] ||
            data[i].profile_profile_Tutor_Price<=PageName[3] 
            ){data.splice(i,1)};
        };  
    }

    getData();

}


