async function getProfileData(){
    console.log("test");
    const response = await fetch('/getProfileData');
    const data = await response.json();
    console.log(data);
    return data
};

async function getBookingData(){
    console.log("test");
    const response = await fetch('/getBookingData');
    const data = await response.json();
    console.log(data);
};

async function getReviewData(){
    console.log("test");
    const response = await fetch('/getReviewData');
    const data = await response.json();
    console.log(data);
};

async function getProfileBookingData(){
    console.log("test");
    const response = await fetch('/getProfileBookingData');
    const data = await response.json();
    console.log(data);
};

async function getTransactionData(){
    console.log("test");
    const response = await fetch('/getTransactionData');
    const data = await response.json();
    console.log(data);
};