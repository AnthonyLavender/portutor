document.getElementById("go").onclick = function(){getData();};


async function getData(){
// var subject = document.getElementById("subject").value;
// var location = document.getElementById("location").value;
// var range = document.getElementById("range").value;
// var price = document.getElementById("price").value;
// console.log(subject);
// console.log(location);
// console.log(range);
// console.log(price);

const res = await fetch("/tutor");
const data = await res.json();
// console.log("");
console.log(data);
};
