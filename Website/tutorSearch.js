getData();
async function getData(){
const res = await fetch("/api");
const data = await res.json();
console.log("Hi2");
console.log(res);
console.log(data);
};
